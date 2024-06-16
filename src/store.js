import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./reducers/TodoListSlice";
import { Load } from "./middlewares/middleware";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Load)
});