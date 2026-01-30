import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';

const IndexContainer = React.lazy(() => import('./components/IndexContainer'));
const ListContainer = React.lazy(() => import('./components/list/ListContainer'));
const BaiduContainer = React.lazy(() => import('./components/map/BaiduContainer'));
const GoogleContainer = React.lazy(() => import('./components/map/GoogleContainer'));
const SamplesContainer = React.lazy(
  () => import('./components/echarts/SamplesContainer')
);
const SettingContainer = React.lazy(
  () => import('./components/setting/SettingContainer')
);
const Auth = React.lazy(() => import('./components/auth/Auth'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <React.Suspense fallback={<div className="auth-page"><div>Loading...</div></div>}>
              <Auth />
            </React.Suspense>
          } />
          <Route path="/register" element={
            <React.Suspense fallback={<div className="auth-page"><div>Loading...</div></div>}>
              <Auth />
            </React.Suspense>
          } />
          <Route path="/" element={<App />}>
            <Route
              index
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <IndexContainer />
                </React.Suspense>
              }
            />
            <Route
              path="list"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ListContainer />
                </React.Suspense>
              }
            />
            <Route
              path="map/baidu"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <BaiduContainer />
                </React.Suspense>
              }
            />
            <Route
              path="map/google"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <GoogleContainer />
                </React.Suspense>
              }
            />
            <Route
              path="echarts/samples"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <SamplesContainer />
                </React.Suspense>
              }
            />
            <Route
              path="setting"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <SettingContainer />
                </React.Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
