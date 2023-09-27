// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./bootstrap/App";
import TodoContextProvider from "./store/TodoContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
