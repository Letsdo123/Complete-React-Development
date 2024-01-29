import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
// import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h2 className="bg-green-500 p-3">User Context Provider</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
