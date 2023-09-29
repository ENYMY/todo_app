import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Header from "../../Header";
import NewTodo from "./include/NewTodo";
import TodoList from "./include/TodoList";
import { TodoContext } from "../../global-context/contexts/todo-context";
import { uiContext } from "../../global-context/contexts/ui-context";
import { SpinWraper } from "../../ui-elements/common/CoreElements";

const TodoPage = () => {
  const { state: todoState, action } = useContext(TodoContext);
  const { state: uiState } = useContext(uiContext);

  const { refreshTodoList: refresh } = todoState;
  useEffect(() => {
    action.requestTodoListItem();
  }, []);

  useEffect(() => {
    action.requestTodoListItem();
  }, [refresh]);
  return (
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
            {uiState.isLoad ? (
              <>
                <SpinWraper />
              </>
            ) : (
              <TodoList />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoPage;
