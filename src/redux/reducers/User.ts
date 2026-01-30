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
  type UserAction,
} from '../actions/User';

interface UserSliceState {
  isFetching: boolean;
  data: unknown;
}

const defaultState: UserSliceState = {
  isFetching: false,
  data: null,
};

export function requestUser(
  state: UserSliceState = defaultState,
  action: UserAction
): UserSliceState {
  switch (action.type) {
    case REQUEST_USER:
      return { ...state, isFetching: true };
    case REQUEST_USER_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case REQUEST_USER_FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}

export function requestUserChangeAdmin(
  state: UserSliceState = defaultState,
  action: UserAction
): UserSliceState {
  switch (action.type) {
    case REQUEST_USER_CHANGEADMIN:
      return { ...state, isFetching: true };
    case REQUEST_USER_CHANGEADMIN_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case REQUEST_USER_CHANGEADMIN_FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}

export function requestUserPermissions(
  state: UserSliceState = defaultState,
  action: UserAction
): UserSliceState {
  switch (action.type) {
    case REQUEST_USER_PERMISSIONS:
      return { ...state, isFetching: true };
    case REQUEST_USER_PERMISSIONS_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case REQUEST_USER_PERMISSIONS_FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}

export function requestUserPermissionsUpdate(
  state: UserSliceState = defaultState,
  action: UserAction
): UserSliceState {
  switch (action.type) {
    case REQUEST_USER_PERMISSIONS_UPDATE:
      return { ...state, isFetching: true };
    case REQUEST_USER_PERMISSIONS_UPDATE_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case REQUEST_USER_PERMISSIONS_UPDATE_FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}

export function requestUserLogout(
  state: Record<string, never> = {},
  action: UserAction
): Record<string, never> | null {
  switch (action.type) {
    case REQUEST_USER_LOGOUT:
      return state;
    default:
      return state;
  }
}

export function requestUserInfo(
  state: UserSliceState = defaultState,
  action: UserAction
): UserSliceState {
  switch (action.type) {
    case REQUEST_USER_INFO:
      return { ...state, isFetching: true };
    case REQUEST_USER_INFO_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case REQUEST_USER_INFO_FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}
