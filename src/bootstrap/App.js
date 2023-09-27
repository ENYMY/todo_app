import { ErrorBoundary } from "../components/ui-elements/common/ErrorBoundary";
import { ContextProvider } from "./Provider";
import TodoTemplate from "../components/ui-elements/template/Todo.template";
import TodoPage from "../components/module/todo/TodoPage";

const App = () => {
  return (
    <ErrorBoundary>
      <ContextProvider>
        <TodoTemplate>
          <TodoPage />
        </TodoTemplate>
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default App;
