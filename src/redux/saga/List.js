import { put, call } from 'redux-saga/effects';
import { getListDone, getListError, deleteListItemDone, deleteListItemError } from '../actions/List';

function getMockResults(params) {
    return [{
        name: 'Sha Sha',
        age: 25,
        sex: 'fmale',
        address: 'Chaoyang District, Beijing, China'
    }, {
        name: 'Tom',
        age: 28,
        sex: 'male',
        address: 'Haidian District, Beijing, China'
    }, {
        name: 'Atom',
        age: 33,
        sex: 'male',
        address: ''
    }, {
        name: 'April',
        age: 28,
        sex: 'fmale',
        address: ''
    }];
}

function deleteItem(params) {
    setTimeout(() => {
        console.log('Simulate the delete action...');
    }, 3000);

    return 'done';
}

export function* getList(action) {
    try {
        const results = yield call(getMockResults, action.params);
        yield put(getListDone(results));
    } catch (ex) {
        yield put(getListError(ex));
    }
}

export function* deleteListItem(action) {
    console.log(action);

    try {
        const result = yield call(deleteItem, action.params);
        if (result === 'done') {
            console.log(result);
            yield put(deleteListItemDone(result));

            // Execute the callback function after finishing the async action.
            action.callback && action.callback(result);
        } else {
            yield put(deleteListItemError('Someting wrong with deleting the item!'));
        }
    } catch (ex) {
        yield put(deleteListItemError(ex));
    }
}