import { createContext, useReducer } from "react"
import { pageStatusLoadKey } from "../../../configs/action-config"
import { uiActions } from "../actions/ui-actions"

const initialState = {
    isLoad: false
}

const uiContext = createContext({})

const uiReducer = (state, action) => {
    switch (action.type) {
        case pageStatusLoadKey:
            return {
                ...state,
                isLoad: action.payload
            }
        default:
            return state;
    }
}

const UIContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, initialState)
    const dispatchActions = uiActions(dispatch);
    const context = {
        state,
        dispatchActions
    }
    return <uiContext.Provider value={context}>{children}</uiContext.Provider>
}

export {
    uiContext,
    UIContextProvider
}