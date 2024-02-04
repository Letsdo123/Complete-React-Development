import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
      isEditable: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("Add to called");
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEditable: false,
      };
      state.todos.push(todo);
      console.log(state.todos, action);
    },
    removeTodo: (state, action) => {
      console.log("Remove todo called");
      const deleteItemId = action.payload;
      state.todos = state.todos.filter((item) => {
        console.log(item.text);
        return item.id != deleteItemId;
      });
    },
    toggleEditMode: (state, action) => {
      console.log("Enable edit mode");
      console.log(state.todos);
      const updateItemId = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === updateItemId) {
            console.log(todo.text);
            return {
              ...todo,
              isEditable: !todo.isEditable,
            };
          } else {
            return todo;
          }
        }),
      };
    },
    updateTodo: (state, action) => {
      console.log("update todo called");
      const updateItemId = action.payload;
      const updatedMsg = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === updateItemId) {
          todo.text = updatedMsg;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, toggleEditMode, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
