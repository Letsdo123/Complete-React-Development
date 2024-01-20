const mainContainer = document.getElementById("root");

// This is the function to make componet from the element
// That is given inside the object
function makeComponent(targetElement, sourceElement) {
  let newElement = document.createElement(targetElement.tagname);
  for (const key in targetElement.attributes) {
    newElement.setAttribute(key, targetElement.attributes[key]);
  }
  newElement.innerHTML = targetElement.children;
  sourceElement.append(newElement);
}

// This is my object
// This has all information about a html element
const element = {
  tagname: "a",
  attributes: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me",
};

makeComponent(element, mainContainer);
