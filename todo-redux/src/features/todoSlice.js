import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

// [{
//     id: 1,
//     title: "Learn redux",
//     completed: false
// }, {}, {}]

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false
            }
            state.todos.push(todo);
        },
        editTodo: (state, action) => {
            const id = action.payload.id;
            const title = action.payload.title;
            state.todos = state.todos.map((todo) => (todo.id == id ? {...todo, title: title} : todo))
        },
        deleteTodo: (state, action) => {
            const id = action.payload.id;
            state.todos = state.todos.filter((todo) => (todo.id != id));
        },
        toggleComplete: (state, action) => {
            const id = action.payload.id;
            state.todos = state.todos.map((todo) => (todo.id == id ? {...todo, completed: !todo.completed} : todo));
        },
        setTodos: (state, action) => {
            const todos = action.payload.todos;
            state.todos = todos;
        }
    }

})

export const {addTodo, editTodo, deleteTodo, toggleComplete, setTodos} = todoSlice.actions
export const todoReducer = todoSlice.reducer
