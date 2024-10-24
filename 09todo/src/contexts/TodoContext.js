import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: 'todo msg',
            completed: false
        }
    ]
})

export const TodoProvider = TodoContext.Provider

export default function useTodo() {
    return useContext(TodoContext)
}