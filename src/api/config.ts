/**
 * API base config.
 * Set VITE_API_BASE_URL in .env or .env.local for development.
 */
const envBaseUrl = import.meta.env.VITE_API_BASE_URL as string | undefined;

export const API_BASE_URL =
  envBaseUrl && envBaseUrl !== ''
    ? envBaseUrl.replace(/\/$/, '')
    : 'http://localhost:8080';

export const DEFAULT_HEADERS: Record<string, string> = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
