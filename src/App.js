import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Box, Grid, Paper, Typography } from "@mui/material";
import TodoList from "./components/todo/TodoList";
import NewTodo from "./components/todo/NewTodo";
const initialTodos = [
  {
    id: Math.random().toString(),
    title: "Day 01",
    description: "Have to go to colombo",
    isFav: false,
    isDone: false,
  },
  {
    id: Math.random().toString(),
    title: "Day 02",
    description: "Have to go to Kandy",
    isFav: false,
    isDone: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const newTodoHandler = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random().toString(),
        title: todo.title,
        description: todo.description,
        isDone: false,
        isFav: false,
      },
    ]);
  };

  const removeTodoFromTodos = (todoId) => {
    const latestTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(latestTodos);
  };
  // useEffect(() => {}, [todos]);
  return (
    <Grid container direction='column' spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid xs={12} item sx={{ marginLeft: "10px" }}>
        <Grid container spacing={1} direction='row'>
          <Grid item xs={4}>
            <NewTodo addNewTodo={newTodoHandler} />
          </Grid>
          <Grid item xs={8}>
            <TodoList todoList={todos} removeTodo={removeTodoFromTodos} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
