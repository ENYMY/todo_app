import { UIContextProvider } from "../components/global-context/contexts/ui-context"

const ContextProvider = ({ children }) => {
    return <UIContextProvider>{children}</UIContextProvider>
}

export {
    ContextProvider
}