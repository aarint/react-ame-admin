export let baseUrl = 'http://localhost:8080'

if (process.env.NODE_ENV !== 'development') {
    baseUrl = '';
}

export const URL_POST_PLATFORM_LOGOUT = `${baseUrl}/quit`
