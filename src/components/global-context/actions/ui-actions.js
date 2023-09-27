import { pageStatusLoadKey } from "../../../configs/action-config"

const setPageLoader = (dispatch, status) => {
    dispatch({
        type: pageStatusLoadKey,
        payload: status
    })
}
const uiActions = (dispatch) => {
    return {
        setPageLoader: (status) => setPageLoader(dispatch, status)
    }
}

export {
    uiActions
}