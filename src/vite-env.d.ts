/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string;
  readonly PROD: boolean;
  readonly DEV: boolean;
  readonly BASE_URL: string;
  [key: string]: string | boolean | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*/ChinaJson.js' {
  const geo: unknown;
  export default geo;
}

declare module 'react-dom/client' {
  import type { Root } from 'react-dom/client';
  export const createRoot: (container: Element | DocumentFragment, options?: { identifierPrefix?: string; onRecoverableError?: (error: unknown) => void }) => Root;
  export type { Root };
}
