import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { Grid } from "@mui/material";
import { LoopItems } from "../../../ui-elements/common/CoreElements";
import { TodoContext } from "../../../global-context/contexts/todo-context";

const TodoList = (props) => {
  const todoCtx = useContext(TodoContext);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
    >
      <Grid xs={12}>
        <Grid spacing={2} container direction="column">
          <LoopItems
            items={todoCtx.state.todoList}
            renderItem={(item, index) => {
              return (
                <TodoListItem key={index} title={item.title} id={item.id} />
              );
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoList;
