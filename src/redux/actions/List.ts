export const LIST_GET = 'LIST_GET' as const;
export const LIST_GET_DONE = 'LIST_GET_DONE' as const;
export const LIST_GET_ERROR = 'LIST_GET_ERROR' as const;

export const LIST_DELETE_ITEM = 'LIST_DELETE_ITEM' as const;
export const LIST_DELETE_ITEM_DONE = 'LIST_DELETE_ITEM_DONE' as const;
export const LIST_DELETE_ITEM_ERROR = 'LIST_DELETE_ITEM_ERROR' as const;

export interface ListItem {
  name: string;
  age: number;
  sex: string;
  address: string;
}

export function getList(params?: Record<string, unknown>) {
  return {
    type: LIST_GET,
    params,
  };
}

export function getListDone(results: ListItem[]) {
  return {
    type: LIST_GET_DONE,
    results,
  };
}

export function getListError(msg: unknown) {
  return {
    type: LIST_GET_ERROR,
    msg,
  };
}

export function deleteListItem(
  params: Record<string, unknown>,
  callback?: (result: string) => void
) {
  return {
    type: LIST_DELETE_ITEM,
    params,
    callback,
  };
}

export function deleteListItemDone(result: string) {
  return {
    type: LIST_DELETE_ITEM_DONE,
    result,
  };
}

export function deleteListItemError(msg: unknown) {
  return {
    type: LIST_DELETE_ITEM_ERROR,
    msg,
  };
}

export type ListAction =
  | ReturnType<typeof getList>
  | ReturnType<typeof getListDone>
  | ReturnType<typeof getListError>
  | ReturnType<typeof deleteListItem>
  | ReturnType<typeof deleteListItemDone>
  | ReturnType<typeof deleteListItemError>;
