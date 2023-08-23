import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
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
    <div className='app'>
      <Header />
      <main>Body</main>
    </div>
  );
};

export default App;
