import Header from "../components/Header";
import { Grid } from "@mui/material";
import TodoList from "../components/todo/TodoList";
import NewTodo from "../components/todo/NewTodo";
import { ErrorBoundary } from "../components/ui-elements/common/ErrorBoundary";
import { ContextProvider } from "./Provider";

const App = () => {
  return (
    <ErrorBoundary>
      <ContextProvider>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid xs={12} item sx={{ marginLeft: "10px" }}>
            <Grid container spacing={1} direction="row">
              <Grid item xs={4}>
                <NewTodo />
              </Grid>
              <Grid item xs={8}>
                <TodoList />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default App;
