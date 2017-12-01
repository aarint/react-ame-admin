export const REQUEST_USER = 'REQUEST_USER';
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';
export const REQUEST_USER_FAIL = 'REQUEST_USER_FAIL';
export const REQUEST_USER_LOGOUT = "REQUEST_POST_LOGOUT";

export const REQUEST_USER_CHANGEADMIN = 'REQUEST_USER_CHANGEADMIN ';
export const REQUEST_USER_CHANGEADMIN_SUCCESS = 'REQUEST_USER_CHANGEADMIN_SUCCESS';
export const REQUEST_USER_CHANGEADMIN_FAIL = 'REQUEST_USER_CHANGEADMIN_FAIL';

export const REQUEST_USER_PERMISSIONS = 'REQUEST_USER_PERMISSIONS';
export const REQUEST_USER_PERMISSIONS_SUCCESS = 'REQUEST_USER_PERMISSIONS_SUCCESS';
export const REQUEST_USER_PERMISSIONS_FAIL = 'REQUEST_USER_PERMISSIONS_FAIL';

export const REQUEST_USER_PERMISSIONS_UPDATE = 'REQUEST_USER_PERMISSIONS_UPDATE';
export const REQUEST_USER_PERMISSIONS_UPDATE_SUCCESS = 'REQUEST_USER_PERMISSIONS_UPDATE_SUCCESS';
export const REQUEST_USER_PERMISSIONS_UPDATE_FAIL = 'REQUEST_USER_PERMISSIONS_UPDATE_FAIL';

export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
export const REQUEST_USER_INFO_SUCCESS = 'REQUEST_USER_INFO_SUCCESS';
export const REQUEST_USER_INFO_FAIL = 'REQUEST_USER_INFO_FAIL';

export function requestUser(params, callback) {
    return {
        type: REQUEST_USER,
        params,
        callback
    }
}

export function requestUserSuccess(data) {
    return {type: REQUEST_USER_SUCCESS, data}
}

export function requestUserFail(error) {
    return {type: REQUEST_USER_FAIL, error}
}

export function requestUserChangeAdmin(params, callback) {
    return {type: REQUEST_USER_CHANGEADMIN, params, callback}
}

export function requestUserChangeAdminSuccess(data) {
    return {type: REQUEST_USER_CHANGEADMIN_SUCCESS, data}
}

export function requestUserChangeAdminFail(error) {
    return {type: REQUEST_USER_CHANGEADMIN_FAIL, error}
}

export function requestUserPermissions(params, callback) {
    return {type: REQUEST_USER_PERMISSIONS, params, callback}
}

export function requestUserPermissionsSuccess(data) {
    return {type: REQUEST_USER_PERMISSIONS_SUCCESS, data}
}

export function requestUserPermissionsFail(error) {
    return {type: REQUEST_USER_PERMISSIONS_FAIL, error}
}

export function requestUserPermissionsUpdate(params, callback) {
    return {type: REQUEST_USER_PERMISSIONS_UPDATE, params, callback}
}

export function requestUserPermissionsUpdateSuccess(data) {
    return {type: REQUEST_USER_PERMISSIONS_UPDATE_SUCCESS, data}
}

export function requestUserPermissionsUpdateFail(error) {
    return {type: REQUEST_USER_PERMISSIONS_UPDATE_FAIL, error}
}

export function requestUserLogout() {
    return {
        type: REQUEST_USER_LOGOUT
    }
}

export function requestUserInfo(params, callback) {
    return {
        type: REQUEST_USER_INFO,
        params,
        callback
    }
}

export function requestUserInfoSuccess(data) {
    return {type: REQUEST_USER_INFO_SUCCESS, data}
}

export function requestUserInfoFail(error) {
    return {type: REQUEST_USER_INFO_FAIL, error}
}
