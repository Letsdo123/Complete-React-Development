import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let userName = "hello";
  let btnText = "click me";
  let myObj = [
    {
      userName: "Alexa",
      decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      btnText: "Click me",
    },
    {
      userName: "Zenny",
      decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      btnText: "Click Here",
    },
  ];
  let myArr = [1, 2, 3, 4, 5];
  return (
    <div className="card-container">
      {/* <h1 className="bg-green-500 text-black p-3 rounded-md">Tailwing test</h1> */}
      {/* 
      
      // This is the static card with data

      <Card
        channelName="ramesh"
        btnText="click here"
        configObj={myObj}
        configArr={myArr}
      />
      <Card channelName="hitesh" btnText="click Me" /> 
      
      */}

      {myObj.map((obj) => {
        return <Card userName={obj.userName} btnText={obj.btnText} />;
      })}
    </div>
  );
}

export default App;
