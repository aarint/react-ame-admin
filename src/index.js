import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import Index from './components/IndexContainer';

import store from './redux/store';

import './index.css';
import App from './App';

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
                <IndexRoute path={'/'} components={Index} />
                <Route path={'/user'} name='User' getComponent={(location, cb) => {
                    import('./components/user/UserContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
                <Route path={'/role/data'} name='RoleData' getComponent={(location, cb) => {
                    //import('./components/role/DataContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
                <Route path={'/role/menu'} name='RoleMenu' getComponent={(location, cb) => {
                    import('./components/role/MenuContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
                <Route path={'/setting'} name='Setting' getComponent={(location, cb) => {
                    import('./components/setting/SettingContainer').then(loadRoute(cb, false)).catch(errorLoading)
                }} />
            </Route>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
