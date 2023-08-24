import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
const emptyTodo = { title: "", description: "" };
const NewTodo = (props) => {
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

  const addNewTodoHandler = () => {
    setEnteredTodo(enteredTodo);
  };

  const clearTodoHandler = () => {
    setEnteredTodo(emptyTodo);
  };
  return (
    <Card>
      <Grid container spacing={2} direction='column' alignItems='center'>
        <Grid item xs={10}>
          <Typography variant='h4'>Add Todo</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h4'>
            <Grid container direction='column' spacing={3}>
              <Grid item>
                <TextField
                  id='title'
                  label='Title'
                  variant='filled'
                  onChange={titleChangeHandler}
                  value={enteredTodo.title}
                />
              </Grid>
              <Grid item>
                <TextField
                  id='description'
                  label='Description'
                  variant='filled'
                  value={enteredTodo.description}
                  onChange={descriptionChangeHandler}
                />
              </Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ margin: "5px" }}>
          <Grid container direction='row' spacing={30}>
            <Grid item xs={6}>
              <Button variant='outlined' onClick={clearTodoHandler}>
                Clear
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant='outlined' onClick={addNewTodoHandler}>
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default NewTodo;
