import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Box, Grid, Paper, Typography } from "@mui/material";
import TodoList from "./components/todo/TodoList";
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
  return (
    <Grid container direction='column' spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid xs={12} item>
        <TodoList todoList={todos} />
      </Grid>
    </Grid>
  );
};

export default App;
