import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import TaskProvider from "./context/TaskProvider";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

*,*::after,*::before{
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
