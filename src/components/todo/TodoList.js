import { Box } from "@mui/system";
import React from "react";
import TodoListItem from "./TodoListItem";
import { Grid } from "@mui/material";

const TodoList = (props) => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignContent='center'>
      <Grid xs={12}>
        <Grid spacing={3} container direction='column'>
          {props.todoList.map((todo) => {
            return <TodoListItem key={todo.id} title={todo.title} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoList;
