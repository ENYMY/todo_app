import { createContext, useContext, useReducer } from "react"
import { refreshTodoListDataKey, requestTodoListDataKey } from "../../../configs/action-config"
import { uiContext } from "./ui-context"
import { todoActions } from "../actions/todo-actions"

const initialState = {
    todoList: [],
    refreshTodoList: false
}

const TodoContext = createContext({})

const todoReducer = (state, action) => {
    switch (action.type) {
        case requestTodoListDataKey:
            return {
                ...state,
                todoList: action.payload
            }
        case refreshTodoListDataKey:
            return {
                ...state,
                refreshTodoList: !state.refreshTodoList
            }
        default:
            return state;
    }
}

const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const uiContextValue = useContext(uiContext)
    const dispatchActions = todoActions(dispatch, uiContextValue.action);
    const context = {
        state: state,
        action: dispatchActions
    }
    return <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
}
export {
    TodoContext,
    TodoContextProvider
}