import { API_BASE_URL, DEFAULT_HEADERS } from './config';

export interface RequestConfig extends Omit<RequestInit, 'body'> {
  params?: Record<string, string | number | boolean | undefined>;
  body?: Record<string, unknown> | unknown;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

function buildUrl(path: string, params?: RequestConfig['params']): string {
  const url = path.startsWith('http') ? path : `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  if (!params || Object.keys(params).length === 0) return url;
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') search.append(key, String(value));
  });
  const query = search.toString();
  return query ? `${url}?${query}` : url;
}

async function handleResponse<T>(res: Response): Promise<T> {
  const text = await res.text();
  let data: T;
  try {
    data = text ? (JSON.parse(text) as T) : (undefined as unknown as T);
  } catch {
    data = text as unknown as T;
  }
  if (!res.ok) {
    throw new ApiError(
      (data as { message?: string })?.message ?? res.statusText ?? 'Request failed',
      res.status,
      data
    );
  }
  return data;
}

/**
 * Generic request method
 */
export async function request<T>(path: string, config: RequestConfig = {}): Promise<T> {
  const { params, body, headers: customHeaders, ...init } = config;
  const url = buildUrl(path, params);
  const headers: Record<string, string> = { ...DEFAULT_HEADERS, ...(customHeaders as Record<string, string>) };
  const res = await fetch(url, {
    ...init,
    headers,
    body: body !== undefined ? (typeof body === 'string' ? body : JSON.stringify(body)) : undefined,
  });
  return handleResponse<T>(res);
}

export const api = {
  get: <T>(path: string, config?: RequestConfig) =>
    request<T>(path, { ...config, method: 'GET' }),

  post: <T>(path: string, body?: RequestConfig['body'], config?: RequestConfig) =>
    request<T>(path, { ...config, method: 'POST', body }),

  put: <T>(path: string, body?: RequestConfig['body'], config?: RequestConfig) =>
    request<T>(path, { ...config, method: 'PUT', body }),

  patch: <T>(path: string, body?: RequestConfig['body'], config?: RequestConfig) =>
    request<T>(path, { ...config, method: 'PATCH', body }),

  delete: <T>(path: string, config?: RequestConfig) =>
    request<T>(path, { ...config, method: 'DELETE' }),
};
