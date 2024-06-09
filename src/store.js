import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./reducers/TodoListSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer
    },
})