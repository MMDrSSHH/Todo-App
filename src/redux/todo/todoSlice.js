import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    error: "",
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // Payload is the todo object
        addTodo: (state, action) => {
            const hasTodo = !!state.todos.find(todo => todo.id === action.payload.id);
            if (!hasTodo && action.payload.todoText) {
                state.todos.push(action.payload);
                state.error = "";
            } else {
                state.error = "Enter a valid task";
            }
        },
        // Payload is the todo object
        removeTodo: (state, action) => {
            const newTodos = state.todos.filter(todo => todo.id !== action.payload.id);
            state.todos = newTodos;
        },
        // Payload is the todo object
        completeTodo: (state, action) => {
            state.todos.forEach((todo, index) => {
                if (todo.id === action.payload.id) {
                    state.todos[index].isComplete = true;
                }
            });
        },

        // Payload is the todo object
        uncompleteTodo: (state, action) => {
            state.todos.forEach((todo, index) => {
                if (todo.id === action.payload.id) {
                    state.todos[index].isComplete = false;
                }
            });
        },
        star: (state, action) => {
            state.todos.forEach((todo, index) => {
                if (todo.id === action.payload.id) {
                    state.todos[index].isStard = true;
                }
            });
        },
        unStar: (state, action) => {
            state.todos.forEach((todo, index) => {
                if (todo.id === action.payload.id) {
                    state.todos[index].isStard = false;
                }
            });
        }
    }
});


export const { addTodo, removeTodo, completeTodo, uncompleteTodo, star, unStar } = todoSlice.actions;
export default todoSlice.reducer;