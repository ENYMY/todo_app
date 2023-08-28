import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { Grid } from "@mui/material";
import todoContext from "../../store/todo-store";

const TodoList = (props) => {
  const todoCtx = useContext(todoContext);

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignContent='center'>
      <Grid xs={12}>
        <Grid spacing={3} container direction='column'>
          {todoCtx.todos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                title={todo.title}
                id={todo.id}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoList;
