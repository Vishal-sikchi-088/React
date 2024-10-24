import React, {useState} from 'react'
import { addTodo } from '../feature/Todo/TodoSlice'
import { useDispatch } from 'react-redux'

function InputField() {
    const [todoMsg, setTodoMsg] = useState('')
    const dispatch = useDispatch()

    const addInputTodo = (e) => {
        e.preventDefault()  // Prevent form submission reload
        if (todoMsg.trim() === '') return // Avoid adding empty todos
        dispatch(addTodo(todoMsg))
        setTodoMsg('')  // Clear input field after adding todo         
    }
    
    return (
        <div className='flex justify-center h-12 '>
            <input className='w-6/12 rounded-md border-1 shadow-xl p-3' value={todoMsg} type='text' placeholder='Write Todo...'
                onChange={(e) => setTodoMsg(e.target.value)}>
            </input>
            <button className='border-1 bg-white hover:bg-[#c6e9a7] h-12 w-11 rounded-md ml-1 shadow-md'
                onClick={(e) => addInputTodo(e)}>➕</button>
        </div>
    )
}

export default InputField
