import React from "react";

const todoContext = React.createContext({
  todos: [],
  addTodo: () => {},
  editTodo: () => {},
  clearTodos: () => {},
  deleteTodo: () => {},
});


export default todoContext;