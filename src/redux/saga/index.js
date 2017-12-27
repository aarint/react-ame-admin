import { takeLatest } from 'redux-saga/effects';
import { LIST_GET, LIST_DELETE_ITEM } from '../actions/List';
import { getList, deleteListItem } from './List';

export default function* index() {
    yield [
        takeLatest(LIST_GET, getList),
        takeLatest(LIST_DELETE_ITEM, deleteListItem)
    ]
}