import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function TodoInput() {
  console.log("Todo component has been loaded");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [msg, setMsg] = useState();
  useEffect(() => {
    console.log("Some chnage has occured in todos");
    todos.map((todo) => {
      if (todo.isEditable) {
        console.log(todo.text);
        setMsg(todo.text);
      }
    });
  }, [todos]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(msg));
    setMsg("");
  };
  return (
    <form className="flex" onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;
