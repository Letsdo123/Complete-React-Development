import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Here react is creating a root means basically the virtual dom
// Then it render the dom inside the provided reference of the container
// It can be either div,spa,p anything createRoot() expects a reference
const root = ReactDOM.createRoot(document.getElementById("root"));

// Here we are rendering the root that we have created from ReactDom
root.render(
  <React.StrictMode>
    <App />
    <App />
  </React.StrictMode>
);
