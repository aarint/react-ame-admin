import { combineReducers } from 'redux';
import {
  requestUser,
  requestUserChangeAdmin,
  requestUserPermissions,
  requestUserPermissionsUpdate,
  requestUserInfo,
} from './User';
import { handleBreadCrumb } from './Common';
import { handleList } from './List';

const rootReducer = combineReducers({
  requestUser,
  requestUserChangeAdmin,
  requestUserPermissions,
  requestUserPermissionsUpdate,
  requestUserInfo,
  handleBreadCrumb,
  handleList,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
