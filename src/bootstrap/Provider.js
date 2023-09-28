import { TodoContextProvider } from "../components/global-context/contexts/todo-context";
import { UIContextProvider } from "../components/global-context/contexts/ui-context";

const ContextProvider = ({ children }) => {
  return (
    <UIContextProvider>
      <TodoContextProvider>{children}</TodoContextProvider>
    </UIContextProvider>
  );
};

export { ContextProvider };
