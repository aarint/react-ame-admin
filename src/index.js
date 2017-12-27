import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function errorLoading(error) {
    throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
    return module => cb(null, module.default);
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path={'/'} components={App}>
                <IndexRoute getComponent={(location, cb) => {
                    import('./components/IndexContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
                <Route path={'/list'} name='List' getComponent={(location, cb) => {
                    import('./components/list/ListContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
                <Route path={'/role/data'} name='RoleData' getComponent={(location, cb) => {
                    import('./components/role/DataContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
                <Route path={'/role/menu'} name='RoleMenu' getComponent={(location, cb) => {
                    import('./components/role/MenuContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
                <Route path={'/map/base'} name='MapBase' getComponent={(location, cb) => {
                    import('./components/map/BaseContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
                <Route path={'/map/mapv'} name='MapMapv' getComponent={(location, cb) => {
                    import('./components/map/MapvContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
                <Route path={'/echarts/samples'} name='EchartsSamples' getComponent={(location, cb) => {
                    import('./components/echarts/SamplesContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
                <Route path={'/setting'} name='Setting' getComponent={(location, cb) => {
                    import('./components/setting/SettingContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
            </Route>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
