import { put, call } from 'redux-saga/effects';
import {
  getList as getListAction,
  getListDone,
  getListError,
  deleteListItem as deleteListItemAction,
  deleteListItemDone,
  deleteListItemError,
  type ListItem,
} from '../actions/List';

function getMockResults(_params?: Record<string, unknown>): ListItem[] {
  return [
    {
      name: 'Sha Sha',
      age: 25,
      sex: 'fmale',
      address: 'Chaoyang District, Beijing, China',
    },
    {
      name: 'Tom',
      age: 28,
      sex: 'male',
      address: 'Haidian District, Beijing, China',
    },
    { name: 'Atom', age: 33, sex: 'male', address: '' },
    { name: 'April', age: 28, sex: 'fmale', address: '' },
    { name: 'Chaos', age: 30, sex: 'fmale', address: 'Canada' },
    { name: 'FAchilles', age: 30, sex: 'fmale', address: 'USA' },
    { name: 'Andy', age: 30, sex: 'fmale', address: 'Canada' },
    { name: 'Frank', age: 30, sex: 'fmale', address: 'Canada' },
    { name: 'David', age: 30, sex: 'fmale', address: 'Canada' },
    { name: 'Peter', age: 30, sex: 'fmale', address: 'Canada' },
    { name: 'Jobs', age: 30, sex: 'fmale', address: 'Canada' },
  ];
}

function deleteItem(_params: Record<string, unknown>): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Simulate the delete action...');
      resolve('done');
    }, 3000);
  });
}

export function* getList(
  action: ReturnType<typeof getListAction>
): Generator<unknown, void, ListItem[]> {
  try {
    const results = yield call(getMockResults, action.params);
    yield put(getListDone(results));
  } catch (ex) {
    yield put(getListError(ex));
  }
}

export function* deleteListItem(
  action: ReturnType<typeof deleteListItemAction>
): Generator<unknown, void, string> {
  try {
    const result = yield call(deleteItem, action.params);
    if (result === 'done') {
      yield put(deleteListItemDone(result));
      action.callback?.(result);
    } else {
      yield put(deleteListItemError('Something wrong with deleting the item!'));
    }
  } catch (ex) {
    yield put(deleteListItemError(ex));
  }
}
