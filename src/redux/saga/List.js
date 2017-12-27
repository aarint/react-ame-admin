import { put, call } from 'redux-saga/effects';
import { getListDone, getListError } from '../actions/List';

export function* getList(action) {
    try {
        console.log(action);
        
        let results;
        yield put(getListDone(results = []));
    } catch (ex) {
        yield put(getListError(ex));
    }
}