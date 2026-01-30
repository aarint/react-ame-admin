/**
 * Demo API module.
 * Sample endpoints agreed with backend, used for list page etc.
 */
import { api } from './client';

/** List item returned by backend (aligned with ListItem) */
export interface DemoListItem {
  name: string;
  age: number;
  sex: string;
  address: string;
}

/** List API response */
export interface DemoListResponse {
  code?: number;
  data?: DemoListItem[];
  message?: string;
}

/** Health check / Hello response */
export interface DemoHelloResponse {
  message: string;
  timestamp?: number;
}

const DEMO_BASE = '/api/demo';

/**
 * Demo API: get list
 * GET /api/demo/list
 * Optional query params: page, pageSize, etc.
 */
export async function getDemoList(params?: { page?: number; pageSize?: number }): Promise<DemoListResponse> {
  return api.get<DemoListResponse>(`${DEMO_BASE}/list`, { params: params as Record<string, string | number | boolean | undefined> });
}

/**
 * Demo API: health check / Hello
 * GET /api/demo/hello
 */
export async function getDemoHello(): Promise<DemoHelloResponse> {
  return api.get<DemoHelloResponse>(`${DEMO_BASE}/hello`);
}

export const demoApi = {
  getList: getDemoList,
  getHello: getDemoHello,
};
