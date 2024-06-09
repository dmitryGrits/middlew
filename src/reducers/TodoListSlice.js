import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "../data/tasks";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    array: tasks
  },
  reducers: {
    addTodo: (state, { payload: newTodoItem }) => {
      if (state.array.some((item) => item.id === newTodoItem.id)) {
        return;
      }
      state.array.push(newTodoItem);
    },
    deleteTodo: (state, { payload: todoItem }) => {
      const filteredArray = state.array.filter(
        (item) => item.id !== todoItem.id
      );
      state.array = filteredArray;
    },
  },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;

export default todoListSlice.reducer;