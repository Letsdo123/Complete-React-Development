import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const anotherELement = (
  <a href="https://www.google.com" target="_blank">
    Click Me
  </a>
);

function AnotherNewElement() {
  return (
    <a href="https://www.google.com" target="_blank">
      Click Me
    </a>
  );
}
// React tranpiler convert the App or CustomJsx into object format
// Then there are one function that converts the object into element
// Then the element is pushed into target element
// Here it is root

// const element = {
//   tagname: "a",
//   attributes: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me",
// };

const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "click me to visit google"
);
// It[reactElement] is returning an object
// console.log(typeof reactElement);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <AnotherNewElement />
  </React.StrictMode>
  // reactElement
);
