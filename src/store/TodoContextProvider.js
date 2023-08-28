import React, { useState } from "react";
import todoContext from "./todo-store";

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

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState(initialTodos);
  const createTodoHandler = (todo) => {
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
  //   updatedTodo: {
  // title: ,
  // description:,

  // }
  const editTodoHandler = (id, updatedTodo) => {
    const oldTodo = todos[id];
    oldTodo.description = updatedTodo.description;
    oldTodo.title = updatedTodo.description;

    const prevTodos = todos.filter((todo) => todo.id !== id);

    setTodos([...prevTodos, oldTodo]);
  };
  const clearTodoHandler = () => {
    return setTodos([]);
  };
  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const context = {
    todos: todos,
    addTodo: createTodoHandler,
    editTodo: editTodoHandler,
    clearTodos: clearTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
  return (
    <todoContext.Provider value={context}>
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
