# Frontend security helpers and guidance

This folder contains SPA-only security helpers for PKCE and API calls.

Important notes for single-page (frontend-only) deployments:
- HttpOnly cookies cannot be set by frontend-only applications. To get HttpOnly cookies
  you must have a backend that exchanges tokens and sets cookies.
- The helpers below implement PKCE and an axios client configured to send cookies
  (withCredentials) and attach XSRF token header if a non-HttpOnly XSRF cookie is present.
- If you truly have no backend, you'll need to store tokens in memory (not localStorage) and
  re-authenticate via PKCE when the access token expires. This is less secure than server-set
  HttpOnly cookies but avoids persistent token storage.

Files added:
- frontend/src/lib/api.js   - axios client (withCredentials, XSRF header, refresh-on-401 flow placeholder)
- frontend/src/lib/cookies.js - cookie reader helper
- frontend/src/lib/pkce.js  - PKCE code verifier/challenge helpers

Recommended next steps
1) Replace any uses of localStorage for tokens with in-memory storage using the helpers above.
2) Search the codebase for innerHTML / dangerouslySetInnerHTML and replace with textContent or
   DOMPurify.sanitize().
3) If you later decide to add a backend, use the provided server-side examples (not included here)
   to implement HttpOnly cookie storage and CSRF protection.
