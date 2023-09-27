import { UIContextProvider } from "../components/global-context/contexts/ui-context";
import TodoContextProvider from "../store/TodoContextProvider";

const ContextProvider = ({ children }) => {
  return (
    <UIContextProvider>
      <TodoContextProvider>{children}</TodoContextProvider>
    </UIContextProvider>
  );
};

export { ContextProvider };
