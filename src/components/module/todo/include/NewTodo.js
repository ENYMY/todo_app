import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import TextInput from "../../../ui-elements/form/TextInput";
import ButtonBasic from "../../../ui-elements/form/ButtonBasic";
import { TodoContext } from "../../../global-context/contexts/todo-context";
import { isEmpty } from "../../../../helper/util.helper";
const emptyTodo = { title: "", description: "" };
const NewTodo = (props) => {
  const { state, action } = useContext(TodoContext);

  const [enteredTodo, setEnteredTodo] = useState(emptyTodo);

  const titleChangeHandler = (event) => {
    setEnteredTodo((todo) => {
      return { ...todo, title: event.target.value };
    });
  };

  const descriptionChangeHandler = (event) => {
    setEnteredTodo((todo) => {
      return { ...todo, description: event.target.value };
    });
  };
  const clearTodoHandler = () => {
    setEnteredTodo(emptyTodo);
  };

  const addNewTodoHandler = () => {
    if (isEmpty(enteredTodo.title) || isEmpty(enteredTodo.description)) {
      return alert("NO empty values accepted");
    }
    // const newTodoList = { ...state.todoList, ...enteredTodo };
    // console.log(newTodoList);
    action.addTodoItem({ ...enteredTodo });
    clearTodoHandler();
  };

  return (
    <Card>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={10}>
          <Typography variant="h4">Add Todo</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h4">
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <TextInput
                  id="title"
                  label="Title"
                  variant="filled"
                  onTextChange={titleChangeHandler}
                  value={enteredTodo.title}
                />
              </Grid>
              <Grid item>
                <TextInput
                  id="description"
                  label="Description"
                  variant="filled"
                  value={enteredTodo.description}
                  onTextChange={descriptionChangeHandler}
                />
              </Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ margin: "5px" }}>
          <Grid container direction="row" spacing={30}>
            <Grid item xs={6}>
              <ButtonBasic
                variant="outlined"
                onBtnClick={clearTodoHandler}
                color="error"
                label="Clear"
              />
            </Grid>
            <Grid item xs={6}>
              <ButtonBasic
                variant="outlined"
                onBtnClick={addNewTodoHandler}
                color="success"
                label="Add"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default NewTodo;
