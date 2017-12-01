import {
    REQUEST_USER,
    REQUEST_USER_SUCCESS,
    REQUEST_USER_FAIL,
    REQUEST_USER_LOGOUT,
    REQUEST_USER_CHANGEADMIN,
    REQUEST_USER_CHANGEADMIN_SUCCESS,
    REQUEST_USER_CHANGEADMIN_FAIL,
    REQUEST_USER_PERMISSIONS,
    REQUEST_USER_PERMISSIONS_SUCCESS,
    REQUEST_USER_PERMISSIONS_FAIL,
    REQUEST_USER_PERMISSIONS_UPDATE,
    REQUEST_USER_PERMISSIONS_UPDATE_SUCCESS,
    REQUEST_USER_PERMISSIONS_UPDATE_FAIL,
    REQUEST_USER_INFO,
    REQUEST_USER_INFO_SUCCESS,
    REQUEST_USER_INFO_FAIL,
} from '../actions/User';

const defaultState = {
    isFetching: false,
    data: null
}

export function requestUser(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_USER:
            return Object.assign({}, state, {isFetching: true});
        case REQUEST_USER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        case REQUEST_USER_FAIL:
            return Object.assign({}, state, {isFetching: false});
        default:
            return state;
    }
}

const defaultAdminState = {
    isFetching: false,
    data: null
}

export function requestUserChangeAdmin(state = defaultAdminState, action) {
    switch (action.type) {
        case REQUEST_USER_CHANGEADMIN:
            return Object.assign({}, state, {isFetching: true});
        case REQUEST_USER_CHANGEADMIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        case REQUEST_USER_CHANGEADMIN_FAIL:
            return Object.assign({}, state, {isFetching: false});
        default:
            return state;
    }
}

export function requestUserPermissions(state = {
    isFetching: false,
    data: null
}, action) {
    switch (action.type) {
        case REQUEST_USER_PERMISSIONS:
            return Object.assign({}, state, {isFetching: true});
        case REQUEST_USER_PERMISSIONS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        case REQUEST_USER_PERMISSIONS_FAIL:
            return Object.assign({}, state, {isFetching: false});
        default:
            return state;
    }
}

export function requestUserPermissionsUpdate(state = {
    isFetching: false,
    data: null
}, action) {
    switch (action.type) {
        case REQUEST_USER_PERMISSIONS_UPDATE:
            return Object.assign({}, state, {isFetching: true});
        case REQUEST_USER_PERMISSIONS_UPDATE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        case REQUEST_USER_PERMISSIONS_UPDATE_FAIL:
            return Object.assign({}, state, {isFetching: false});
        default:
            return state;
    }
}

export function requestUserLogout(state = {}, action) {
    switch (action.type) {
        case REQUEST_USER_LOGOUT:
            return state;
        default:
            return null;
    }
}

export function requestUserInfo(state = defaultState, action) {    
    switch (action.type) {
        case REQUEST_USER_INFO:
            return Object.assign({}, state, {isFetching: true});
        case REQUEST_USER_INFO_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        case REQUEST_USER_INFO_FAIL:
            return Object.assign({}, state, {isFetching: false});
        default:
            return state;
    }
}
