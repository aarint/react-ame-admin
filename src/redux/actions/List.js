export const LIST_GET = "LIST_GET";
export const LIST_GET_DONE = "LIST_GET_DONE";
export const LIST_GET_ERROR = "LIST_GET_ERROR";

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