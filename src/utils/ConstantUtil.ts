export let baseUrl = 'http://localhost:8080';

if (import.meta.env.MODE !== 'development') {
  baseUrl = '';
}

export const URL_POST_PLATFORM_LOGOUT = `${baseUrl}/quit`;
