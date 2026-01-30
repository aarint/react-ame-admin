export const REQUEST_USER = 'REQUEST_USER' as const;
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS' as const;
export const REQUEST_USER_FAIL = 'REQUEST_USER_FAIL' as const;
export const REQUEST_USER_LOGOUT = 'REQUEST_POST_LOGOUT' as const;

export const REQUEST_USER_CHANGEADMIN = 'REQUEST_USER_CHANGEADMIN ' as const;
export const REQUEST_USER_CHANGEADMIN_SUCCESS = 'REQUEST_USER_CHANGEADMIN_SUCCESS' as const;
export const REQUEST_USER_CHANGEADMIN_FAIL = 'REQUEST_USER_CHANGEADMIN_FAIL' as const;

export const REQUEST_USER_PERMISSIONS = 'REQUEST_USER_PERMISSIONS' as const;
export const REQUEST_USER_PERMISSIONS_SUCCESS = 'REQUEST_USER_PERMISSIONS_SUCCESS' as const;
export const REQUEST_USER_PERMISSIONS_FAIL = 'REQUEST_USER_PERMISSIONS_FAIL' as const;

export const REQUEST_USER_PERMISSIONS_UPDATE = 'REQUEST_USER_PERMISSIONS_UPDATE' as const;
export const REQUEST_USER_PERMISSIONS_UPDATE_SUCCESS =
  'REQUEST_USER_PERMISSIONS_UPDATE_SUCCESS' as const;
export const REQUEST_USER_PERMISSIONS_UPDATE_FAIL =
  'REQUEST_USER_PERMISSIONS_UPDATE_FAIL' as const;

export const REQUEST_USER_INFO = 'REQUEST_USER_INFO' as const;
export const REQUEST_USER_INFO_SUCCESS = 'REQUEST_USER_INFO_SUCCESS' as const;
export const REQUEST_USER_INFO_FAIL = 'REQUEST_USER_INFO_FAIL' as const;

export function requestUser(params?: unknown, callback?: () => void) {
  return { type: REQUEST_USER, params, callback };
}

export function requestUserSuccess(data: unknown) {
  return { type: REQUEST_USER_SUCCESS, data };
}

export function requestUserFail(error: unknown) {
  return { type: REQUEST_USER_FAIL, error };
}

export function requestUserChangeAdmin(params?: unknown, callback?: () => void) {
  return { type: REQUEST_USER_CHANGEADMIN, params, callback };
}

export function requestUserChangeAdminSuccess(data: unknown) {
  return { type: REQUEST_USER_CHANGEADMIN_SUCCESS, data };
}

export function requestUserChangeAdminFail(error: unknown) {
  return { type: REQUEST_USER_CHANGEADMIN_FAIL, error };
}

export function requestUserPermissions(params?: unknown, callback?: () => void) {
  return { type: REQUEST_USER_PERMISSIONS, params, callback };
}

export function requestUserPermissionsSuccess(data: unknown) {
  return { type: REQUEST_USER_PERMISSIONS_SUCCESS, data };
}

export function requestUserPermissionsFail(error: unknown) {
  return { type: REQUEST_USER_PERMISSIONS_FAIL, error };
}

export function requestUserPermissionsUpdate(params?: unknown, callback?: () => void) {
  return { type: REQUEST_USER_PERMISSIONS_UPDATE, params, callback };
}

export function requestUserPermissionsUpdateSuccess(data: unknown) {
  return { type: REQUEST_USER_PERMISSIONS_UPDATE_SUCCESS, data };
}

export function requestUserPermissionsUpdateFail(error: unknown) {
  return { type: REQUEST_USER_PERMISSIONS_UPDATE_FAIL, error };
}

export function requestUserLogout() {
  return { type: REQUEST_USER_LOGOUT };
}

export function requestUserInfo(params?: unknown, callback?: () => void) {
  return { type: REQUEST_USER_INFO, params, callback };
}

export function requestUserInfoSuccess(data: unknown) {
  return { type: REQUEST_USER_INFO_SUCCESS, data };
}

export function requestUserInfoFail(error: unknown) {
  return { type: REQUEST_USER_INFO_FAIL, error };
}

export type UserAction =
  | ReturnType<typeof requestUser>
  | ReturnType<typeof requestUserSuccess>
  | ReturnType<typeof requestUserFail>
  | ReturnType<typeof requestUserChangeAdmin>
  | ReturnType<typeof requestUserChangeAdminSuccess>
  | ReturnType<typeof requestUserChangeAdminFail>
  | ReturnType<typeof requestUserPermissions>
  | ReturnType<typeof requestUserPermissionsSuccess>
  | ReturnType<typeof requestUserPermissionsFail>
  | ReturnType<typeof requestUserPermissionsUpdate>
  | ReturnType<typeof requestUserPermissionsUpdateSuccess>
  | ReturnType<typeof requestUserPermissionsUpdateFail>
  | ReturnType<typeof requestUserLogout>
  | ReturnType<typeof requestUserInfo>
  | ReturnType<typeof requestUserInfoSuccess>
  | ReturnType<typeof requestUserInfoFail>;
