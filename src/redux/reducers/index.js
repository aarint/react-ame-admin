import { combineReducers } from 'redux';
import { requestUser, requestUserChangeAdmin, requestUserPermissions, requestUserPermissionsUpdate, requestUserInfo } from './User';
import { handleBreadCrumb } from './Common';
import { handleList } from "./List";

export default combineReducers({
    requestUser,
    requestUserChangeAdmin,
    requestUserPermissions,
    requestUserPermissionsUpdate,
    requestUserInfo,
    handleBreadCrumb,
    handleList
});