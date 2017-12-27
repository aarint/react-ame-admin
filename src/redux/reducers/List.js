import { LIST_GET, LIST_GET_DONE, LIST_GET_ERROR } from "../actions/List";

export function handleList(state = {}, action) {
    switch (action.type) {
        case LIST_GET_DONE:
            return Object.assign({}, state, action.results);
        case LIST_GET_ERROR:
            return Object.assign({}, state, action.msg);
        default:
            return state;
    }
}