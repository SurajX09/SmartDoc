import axios from 'axios';
import { getCookie } from './cookies';

// In-SPA token storage (memory) fallback. Note: Without a backend that sets HttpOnly cookies
// you cannot get the full safety benefits of HttpOnly cookies. This client supports both
// approaches: if the server sets HttpOnly cookies and XSRF-TOKEN cookie, those will be used
// automatically (withCredentials: true). If you are running a pure SPA with no backend, use
// in-memory tokens and the PKCE helpers to keep tokens out of persistent storage.

let inMemoryAccessToken = null;

export function setInMemoryAccessToken(token) {
  inMemoryAccessToken = token;
}
export function clearInMemoryAccessToken() {
  inMemoryAccessToken = null;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  withCredentials: true, // ensure cookies (if any) are sent
});

api.interceptors.request.use(config => {
  // Attach XSRF header for mutating requests if cookie exists
  const method = (config.method || '').toLowerCase();
  if (['post', 'put', 'patch', 'delete'].includes(method)) {
    const xsrf = getCookie('XSRF-TOKEN');
    if (xsrf) {
      config.headers['X-XSRF-TOKEN'] = xsrf;
    }
  }

  // If using in-memory tokens (pure SPA mode), attach Authorization header
  if (inMemoryAccessToken && !config.headers['Authorization']) {
    config.headers['Authorization'] = `Bearer ${inMemoryAccessToken}`;
  }

  return config;
}, err => Promise.reject(err));

// Handle 401 responses: try to call refresh endpoint if available. For SPA-only setups
// without a backend refresh endpoint, rely on PKCE login flow to re-authenticate.
let isRefreshing = false;
let refreshSubscribers = [];
function subscribeRefresh(cb) { refreshSubscribers.push(cb); }
function onRefreshed() { refreshSubscribers.forEach(cb => cb()); refreshSubscribers = []; }

api.interceptors.response.use(
  res => res,
  async (error) => {
    const originalRequest = error.config;
    if (!originalRequest || originalRequest._retry) return Promise.reject(error);

    if (error.response && error.response.status === 401) {
      originalRequest._retry = true;

      // If an API refresh endpoint exists (server-side), call it. Otherwise, in SPA-only mode
      // we cannot refresh with HttpOnly cookies; fallback is to redirect to login flow.
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          await axios.post('/api/auth/refresh', {}, { withCredentials: true });
          isRefreshing = false;
          onRefreshed();
        } catch (refreshErr) {
          isRefreshing = false;
          // No backend refresh available or refresh failed -> redirect to login
          window.location.href = '/login';
          return Promise.reject(refreshErr);
        }
      }

      return new Promise((resolve) => {
        subscribeRefresh(() => {
          resolve(api(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  }
);

export default api;
