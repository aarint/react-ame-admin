export const CURRENT_BREAD_CRUMB_DATA = 'CURRENT_BREAD_CRUMB_DATA' as const;
export const CHANGE_BREAD_CRUMB_DATA = 'CHANGE_BREAD_CRUMB_DATA' as const;

export interface BreadCrumbState {
  keyPath: string[];
  openKeys: string[];
  selectedKeys: string[];
}

export function getCurrentBreadCrumbData() {
  return {
    type: CURRENT_BREAD_CRUMB_DATA,
  };
}

export function changeBreadCrumbData(currentCrumb: BreadCrumbState) {
  return {
    type: CHANGE_BREAD_CRUMB_DATA,
    currentCrumb,
  };
}

export type CommonAction =
  | ReturnType<typeof getCurrentBreadCrumbData>
  | ReturnType<typeof changeBreadCrumbData>;
