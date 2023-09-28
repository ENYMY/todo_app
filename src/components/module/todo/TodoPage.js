import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Header from "../../Header";
import NewTodo from "./include/NewTodo";
import TodoList from "./include/TodoList";
import { TodoContext } from "../../global-context/contexts/todo-context";

const TodoPage = () => {
  const { action } = useContext(TodoContext);
  useEffect(() => {
    action.requestTodoListItem();
  }, []);
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
            <TodoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoPage;
