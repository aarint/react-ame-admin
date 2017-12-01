import { combineReducers } from 'redux';
import { requestUser, requestUserChangeAdmin, requestUserPermissions, requestUserPermissionsUpdate, requestUserInfo } from './User';

export default combineReducers({
    requestUser,
    requestUserChangeAdmin,
    requestUserPermissions,
    requestUserPermissionsUpdate,
    requestUserInfo
});