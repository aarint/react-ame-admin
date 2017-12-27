export const CURRENT_BREAD_CRUMB_DATA = "CURRENT_BREAD_CRUMB_DATA";
export const CHANGE_BREAD_CRUMB_DATA = "CHANGE_BREAD_CRUMB_DATA";

export function getCurrentBreadCrumbData() {
    return {
        type: CURRENT_BREAD_CRUMB_DATA
    }
}

export function changeBreadCrumbData(currentCrumb) {
    return {
        type: CHANGE_BREAD_CRUMB_DATA,
        currentCrumb: currentCrumb
    }
}