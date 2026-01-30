import {
  CHANGE_BREAD_CRUMB_DATA,
  CURRENT_BREAD_CRUMB_DATA,
  type BreadCrumbState,
  type CommonAction,
} from '../actions/Common';

interface CommonReducerState {
  currentCrumb: BreadCrumbState | null;
}

const globalState: CommonReducerState = {
  currentCrumb: null,
};

export function handleBreadCrumb(
  state: CommonReducerState = globalState,
  action: CommonAction
): CommonReducerState {
  switch (action.type) {
    case CHANGE_BREAD_CRUMB_DATA:
      sessionStorage.setItem('currentCrumb', JSON.stringify(action.currentCrumb));
      return { ...state, currentCrumb: action.currentCrumb };

    case CURRENT_BREAD_CRUMB_DATA: {
      let obj: BreadCrumbState | null = null;
      try {
        const raw = sessionStorage.getItem('currentCrumb');
        obj = raw ? (JSON.parse(raw) as BreadCrumbState) : null;
      } catch {
        obj = null;
      }
      return { ...state, currentCrumb: obj };
    }

    default:
      return state;
  }
}
