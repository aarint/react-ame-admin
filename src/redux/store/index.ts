import { createStore, applyMiddleware, type Reducer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../saga';
import type { RootState } from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer as unknown as Reducer<RootState>,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type { RootState };
