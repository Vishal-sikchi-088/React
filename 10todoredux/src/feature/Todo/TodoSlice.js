import { createSlice } from "@reduxjs/toolkit";


function addTodoFun (state,action) {
    const newTodo = {
        id: Date.now(),
        todo: action.payload,
        completed: false
    }
    state.Todos.push(newTodo)  
    saveToLocalStorage(state.Todos);
}

function deleteTodoFun (state,action)  {
    state.Todos = state.Todos.filter((todo) => todo.id !== action.payload)
    saveToLocalStorage(state.Todos);
}

function toggleCompleteFun (state, action) {
    state.Todos = state.Todos.map((Todo) =>
        Todo.id === action.payload
            ? { ...Todo, completed: !Todo.completed }
            : Todo
    );
    saveToLocalStorage(state.Todos);
}

function editTodosgFun (state,action){    
    state.Todos = state.Todos.map((Todo) => Todo.id === action.payload.id ? { ...Todo, todo: action.payload.todoMsg } : Todo)
    console.log(state.Todos);
    
    saveToLocalStorage(state.Todos);
}

function saveToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const initialState = {
    Todos: JSON.parse(localStorage.getItem('todos')) || [],
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: addTodoFun,
        deleteTodo: deleteTodoFun,
        toggleComplete: toggleCompleteFun,
        editTodosg: editTodosgFun
    }
})

export const {addTodo, deleteTodo, toggleComplete, editTodosg} = todoSlice.actions
export default todoSlice.reducer