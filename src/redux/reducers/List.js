import { LIST_GET_DONE, LIST_GET_ERROR, LIST_DELETE_ITEM_DONE, LIST_DELETE_ITEM_ERROR } from "../actions/List";

export function handleList(state = {}, action) {
    switch (action.type) {
        case LIST_GET_DONE:
            return Object.assign({}, state, { results: action.results });
        case LIST_GET_ERROR:
            return Object.assign({}, state, action.msg);
        case LIST_DELETE_ITEM_DONE:
            return Object.assign({}, state, { result: action.result });
        case LIST_DELETE_ITEM_ERROR:
            return Object.assign({}, state, { msg: action.msg });
        default:
            return state;
    }
}