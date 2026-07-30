function base64UrlEncode(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function sha256(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  return await crypto.subtle.digest('SHA-256', data);
}

export async function generatePKCECodes() {
  const array = new Uint8Array(64);
  window.crypto.getRandomValues(array);
  const code_verifier = base64UrlEncode(array);
  const hashed = await sha256(code_verifier);
  const code_challenge = base64UrlEncode(hashed);
  return { code_verifier, code_challenge };
}

export function saveVerifier(verifier) {
  sessionStorage.setItem('pkce_verifier', verifier);
}
export function getVerifier() {
  return sessionStorage.getItem('pkce_verifier');
}
export function clearVerifier() {
  sessionStorage.removeItem('pkce_verifier');
}
