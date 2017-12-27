export const LIST_GET = "LIST_GET";
export const LIST_GET_DONE = "LIST_GET_DONE";
export const LIST_GET_ERROR = "LIST_GET_ERROR";

export const LIST_DELETE_ITEM = "LIST_DELETE_ITEM";
export const LIST_DELETE_ITEM_DONE = "LIST_DELETE_ITEM_DONE";
export const LIST_DELETE_ITEM_ERROR = "LIST_DELETE_ITEM_ERROR";

export function getList(params) {
    return {
        type: LIST_GET,
        params
    }
}

export function getListDone(results) {
    return {
        type: LIST_GET_DONE,
        results
    }
}

export function getListError(msg) {
    return {
        type: LIST_GET_ERROR,
        msg
    }
}

export function deleteListItem(params, callback) {
    return {
        type: LIST_DELETE_ITEM,
        params,
        callback
    }
}

export function deleteListItemDone(result) {
    return {
        type: LIST_DELETE_ITEM_DONE,
        result
    }
}

export function deleteListItemError(msg) {
    return {
        type: LIST_DELETE_ITEM_ERROR,
        msg
    }
}