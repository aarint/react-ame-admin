import { takeLatest } from 'redux-saga/effects';
import { LIST_GET } from '../actions/List';
import { getList } from './List';

export default function* index() {
    yield [
        takeLatest(LIST_GET, getList)
    ]
}