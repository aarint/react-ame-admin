# React AME Admin

[![React](https://img.shields.io/badge/react-^18.3-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Ant Design](https://img.shields.io/badge/ant--design-^5.22-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![Vite](https://img.shields.io/badge/vite-^5.4-646CFF.svg?style=flat-square)](https://vitejs.dev/)
[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)

A frontend admin dashboard built with **React 18**, **TypeScript**, **Vite**, **Ant Design 5**, **Redux**, **Redux-Saga**, **React Router 6**, and **ECharts 5**.

## Features

- **TypeScript** – Full type safety across the codebase
- **Vite** – Fast dev server and optimized production builds
- **Ant Design 5** – Modern UI components and design tokens
- **Redux + Redux-Saga** – State management and async flows
- **React Router 6** – Declarative routing with nested layouts
- **ECharts 5** – Charts (Line, Bar, Pie, Radar) and dashboard visuals
- **Dashboard** – Summary, trend charts, calendar, China map placeholder
- **List** – Table with filters, sort, and delete (支持后端 API 或 mock 数据)
- **API 对接** – 统一 API 客户端、环境配置与 Demo 接口
- **Map** – Placeholders for Baidu / Google maps (add SDK and keys to enable)

## Installation & Usage

1. Clone the repository.

2. Install dependencies (includes devDependencies for Vite, TypeScript, etc.):

```bash
npm install
```

3. Start the development server (http://localhost:3000):

```bash
npm run dev
```

4. Build for production (TypeScript check + Vite build):

```bash
npm run build
```

5. Preview the production build (http://localhost:4173):

```bash
npm run preview
```

## Docker

Build and run with Docker (multi-stage: Node build + nginx serve):

```bash
docker build -t react-ame-admin .
docker run -p 8080:80 react-ame-admin
```

Or with Docker Compose:

```bash
docker compose up -d --build
```

App will be available at http://localhost:8080.

## Scripts

| Command       | Description                |
| ------------- | -------------------------- |
| `npm run dev` | Start Vite dev server      |
| `npm run build` | TypeScript + Vite build  |
| `npm run preview` | Preview production build |
| `npm run test` | Run Vitest tests         |

## 后端 API 对接

前端通过 `src/api/` 与后端对接：统一请求封装、基础 URL 配置、按业务拆分的 API 模块。

### 配置

- 默认请求基地址：`http://localhost:8080`
- 可通过环境变量覆盖：在项目根目录创建 `.env` 或 `.env.local`，设置：
  ```bash
  VITE_API_BASE_URL=http://your-api-host:port
  ```

### Demo API 列表（后端需实现）

| 方法 | 路径 | 说明 | 请求 | 响应示例 |
|------|------|------|------|----------|
| GET | `/api/demo/hello` | 健康检查 / Hello | 无 | `{ "message": "hello", "timestamp": 1234567890 }` |
| GET | `/api/demo/list` | 获取列表（列表页） | 可选 query: `page`, `pageSize` | `{ "code": 0, "data": [ { "name": "xxx", "age": 18, "sex": "male", "address": "..." } ] }` |

- **列表页行为**：进入列表页会先请求 `GET /api/demo/list`；若接口可用且返回 `data` 数组则使用接口数据，否则使用本地 mock 数据。
- **调用示例**（在组件或 saga 中）：
  ```ts
  import { demoApi } from '@/api';
  const res = await demoApi.getList({ page: 1, pageSize: 10 });
  const list = res?.data ?? [];
  ```

### 项目内 API 结构

- `src/api/config.ts` – API 基地址、默认 headers
- `src/api/client.ts` – `request`、`api.get/post/put/patch/delete`、错误类 `ApiError`
- `src/api/demo.ts` – Demo 接口：`getDemoList`、`getDemoHello`
- `src/api/index.ts` – 统一导出

## Project structure

- `src/` – Application source (TypeScript/TSX)
- `src/api/` – API 客户端、配置与业务接口（如 demo）
- `src/redux/` – Actions, reducers, saga, store
- `src/components/` – Dashboard, list, map, echarts, setting
- `public/` – Static assets
- `index.html` – Entry HTML (Vite uses root-level `index.html`)

## Migration notes (from JS/Webpack)

- Build tool: **Webpack 3** → **Vite 5**
- Language: **JavaScript** → **TypeScript**
- Router: **react-router 3** → **react-router-dom 6**
- UI: **Ant Design 3** → **Ant Design 5** (icons from `@ant-design/icons`)
- Charts: **echarts 3** → **echarts 5**
- Entry: `src/index.js` → `src/main.tsx`; root `index.html` for Vite

Baidu/Google map containers are placeholders; add `react-bmap` (or Google Maps SDK) and API keys to restore full map features.

## License

MIT
