import {
  LIST_GET_DONE,
  LIST_GET_ERROR,
  LIST_DELETE_ITEM_DONE,
  LIST_DELETE_ITEM_ERROR,
  type ListItem,
  type ListAction,
} from '../actions/List';

interface ListReducerState {
  results?: ListItem[];
  result?: string;
  msg?: unknown;
}

export function handleList(
  state: ListReducerState = {},
  action: ListAction
): ListReducerState {
  switch (action.type) {
    case LIST_GET_DONE:
      return { ...state, results: action.results };
    case LIST_GET_ERROR:
      return { ...state, msg: action.msg };
    case LIST_DELETE_ITEM_DONE:
      return { ...state, result: action.result };
    case LIST_DELETE_ITEM_ERROR:
      return { ...state, msg: action.msg };
    default:
      return state;
  }
}
