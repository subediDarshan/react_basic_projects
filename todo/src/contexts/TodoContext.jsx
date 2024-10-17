import React,{ useContext, createContext } from "react";
import { useState, useEffect } from "react";

const TodoContext = createContext();


// {
//     todos: [
//         {
//             id: 1,
//             title: 'learn react',
//             completed: false
//         }
//     ],
//     setTodos: setTodos,
//     addTodo: () => {},
//     editTodo: () => {},
//     deleteTodo: () => {}
// }




const TodoContextProvider = ({children}) => {

    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        setTodos((prev) => ([...prev, {id: Date.now(), title: title, completed: false}]))
    }
    
    const editTodo = (id, title) => {
        setTodos((prev) => (prev.map((todo) => (todo.id == id ? {...todo, title: title} : todo))))
    }
    
    const deleteTodo = (id) => {
        setTodos((prev) => (prev.filter((todo) => (todo.id != id))))
    }
    
    const toggleComplete = (id) => {
        setTodos((prev) => (prev.map((todo) => (todo.id == id ? {...todo, completed: !todo.completed} : todo))))
    }

    useEffect(() => {
        const response = JSON.parse(localStorage.getItem("todos"))
        console.log(response);
        if(response && response.length > 0) {
            setTodos(response)
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])



    return (
        <TodoContext.Provider value={{
            todos: todos,
            setTodos: setTodos,
            addTodo: addTodo,
            editTodo: editTodo,
            deleteTodo: deleteTodo,
            toggleComplete: toggleComplete
        }}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodo = () => {
    return useContext(TodoContext);
}

export {useTodo, TodoContextProvider}