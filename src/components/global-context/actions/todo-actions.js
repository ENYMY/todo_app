import { refreshTodoListDataKey, requestTodoListDataKey } from "../../../configs/action-config";
import { apiURL } from "../../../configs/api-endpoints";
import { httpRequest } from "../../../helper/http.helper";

const requestTodoListItem = async (dispatch, uiActions) => {
    try {
        uiActions.setPageLoader(true);
        const responseData = await httpRequest(apiURL);
        uiActions.setPageLoader(false);
        dispatch({ type: requestTodoListDataKey, payload: responseData })
    } catch (ex) {
        uiActions.setPageLoader(false);
        console.error("Error", ex);
        dispatch({
            type: requestTodoListDataKey,
            payload: []
        })
    }
}

const addTodoItem = async (dispatch, body, uiActions) => {
    try {
        uiActions.setPageLoader(true);
        const responseData = await httpRequest(apiURL, "POST", body);
        uiActions.setPageLoader(false);
        dispatch({
            type: refreshTodoListDataKey
        })
    } catch (ex) {
        uiActions.setPageLoader(false);
        console.error("Error:", ex);
    }
}

// const editTodoItem = (dispatch, id, body, uiActions) => {
//     try {
//         uiActions.setPageLoader(true);
//         const data = await httpRequest(`${apiURL}/${id}/`,)
//         uiActions.setPageLoader(false);
//     }
// }
// const removeTodoItem = () => {}



const todoActions = (dispatch, uiActions) => {
    return {
        requestTodoListItem: () => requestTodoListItem(dispatch, uiActions),
        addTodoItem: (body) => addTodoItem(dispatch, body, uiActions)
    }
}
export {
    todoActions
}