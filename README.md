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
- **List** – Table with filters, sort, and delete (mock data)
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

## Scripts

| Command       | Description                |
| ------------- | -------------------------- |
| `npm run dev` | Start Vite dev server      |
| `npm run build` | TypeScript + Vite build  |
| `npm run preview` | Preview production build |
| `npm run test` | Run Vitest tests         |

## Project structure

- `src/` – Application source (TypeScript/TSX)
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
