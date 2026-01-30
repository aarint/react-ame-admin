import { all, takeLatest } from 'redux-saga/effects';
import { LIST_GET, LIST_DELETE_ITEM } from '../actions/List';
import { getList, deleteListItem } from './List';

export default function* rootSaga(): Generator {
  yield all([
    takeLatest(LIST_GET, getList as (action: unknown) => Generator),
    takeLatest(LIST_DELETE_ITEM, deleteListItem as (action: unknown) => Generator),
  ]);
}
