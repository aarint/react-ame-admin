# React AME Admin

[![React](https://img.shields.io/badge/react-^18.3-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Ant Design](https://img.shields.io/badge/ant--design-^5.22-0170fe?style=flat-square&logo=antdesign)](https://ant.design/)
[![Vite](https://img.shields.io/badge/vite-^5.4-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

A modern admin dashboard built with **React 18**, **TypeScript**, **Vite**, **Ant Design 5**, **Redux**, **Redux-Saga**, **React Router 6**, and **ECharts 5**.

---

## Features

| Area | Description |
|------|-------------|
| **TypeScript** | Full type safety across the codebase |
| **Vite** | Fast HMR and optimized production builds |
| **Ant Design 5** | UI components and design tokens |
| **Redux + Redux-Saga** | Global state and async flows |
| **React Router 6** | Nested routes and layouts |
| **ECharts 5** | Line, Bar, Pie, Radar, **Candlestick + EMA** samples |
| **Dashboard** | Summary, trends, calendar, map placeholder |
| **List** | Table with filters, sort, delete; backend API or mock data |
| **API** | Centralized client, base URL config, demo endpoints |
| **Map** | Placeholders for Baidu / Google (add SDK + keys to enable) |

---

## Prerequisites

- **Node.js** 18+ (recommended 20+)
- **npm** or **yarn**

---

## Quick Start

1. **Clone and install**

   ```bash
   git clone <repo-url>
   cd react-ame-admin
   npm install
   ```

2. **Development** (http://localhost:5173)

   ```bash
   npm run dev
   ```

3. **Production build**

   ```bash
   npm run build
   ```

4. **Preview production build** (http://localhost:4173)

   ```bash
   npm run preview
   ```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript check + Vite build |
| `npm run preview` | Serve production build locally |
| `npm run test` | Run Vitest tests |
| `npm run test:watch` | Run Vitest in watch mode |

---

## Docker

Build and run with Docker (multi-stage: Node build + nginx):

```bash
docker build -t react-ame-admin .
docker run -p 8080:80 react-ame-admin
```

With Docker Compose:

```bash
docker compose up -d --build
```

App: **http://localhost:8080**

---

## Backend API

The app uses `src/api/` for all backend calls: shared client, base URL config, and per-feature modules.

### Configuration

- **Base URL**: `http://localhost:8080` (default)
- Override via env: create `.env` or `.env.local` in the project root:

  ```bash
  VITE_API_BASE_URL=http://your-api-host:port
  ```

### Demo endpoints (backend must implement)

| Method | Path | Description | Request | Response example |
|--------|------|-------------|---------|-------------------|
| GET | `/api/demo/hello` | Health / hello | — | `{ "message": "hello", "timestamp": 1234567890 }` |
| GET | `/api/demo/list` | List data for List page | Optional query: `page`, `pageSize` | `{ "code": 0, "data": [ { "name": "xxx", "age": 18, "sex": "male", "address": "..." } ] }` |

- **List page**: On load, it requests `GET /api/demo/list`. If the response has a `data` array, that is used; otherwise mock data is used.
- **Usage in components or sagas**:

  ```ts
  import { demoApi } from '@/api';
  const res = await demoApi.getList({ page: 1, pageSize: 10 });
  const list = res?.data ?? [];
  ```

### API layout

| File | Purpose |
|------|---------|
| `src/api/config.ts` | Base URL, default headers |
| `src/api/client.ts` | `request`, `api.get/post/put/patch/delete`, `ApiError` |
| `src/api/demo.ts` | Demo: `getDemoList`, `getDemoHello` |
| `src/api/index.ts` | Re-exports |

---

## Project structure

```
src/
├── api/           # API client, config, demo endpoints
├── components/    # UI by feature
│   ├── dashboard/ # Summary, trend, calendar, map
│   ├── echarts/   # Samples: Line, Bar, Pie, Radar, Candlestick (EMA)
│   ├── list/      # List table
│   ├── map/       # Baidu / Google placeholders
│   ├── setting/   # Settings
│   └── auth/      # Auth / login
├── redux/         # Actions, reducers, saga, store
├── utils/         # Constants, helpers
├── main.tsx       # Entry
└── App.tsx        # Layout & routes
```

---

## Tech stack (migration notes)

| Before | After |
|--------|-------|
| Webpack 3 | Vite 5 |
| JavaScript | TypeScript |
| react-router 3 | react-router-dom 6 |
| Ant Design 3 | Ant Design 5 (`@ant-design/icons`) |
| echarts 3 | echarts 5 |
| `src/index.js` | `src/main.tsx`; root `index.html` for Vite |

Baidu/Google map views are placeholders; add the corresponding SDK and API keys to enable full map features.

---

## License

MIT
