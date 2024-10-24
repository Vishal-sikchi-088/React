import React, {useState} from 'react'
import { deleteTodo, toggleComplete, editTodosg } from '../feature/Todo/TodoSlice'
import { useDispatch} from 'react-redux'


function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const dispatch = useDispatch()

    const toggleCompleted = () =>{
        dispatch(toggleComplete(todo.id))
    }

    const editTodo = () => {
        dispatch(editTodosg({id: todo.id, todoMsg}))
        setIsTodoEditable(false)
    }

    const deleteInputTodo = (id) => {
        dispatch(deleteTodo(id))
    }


    return (
        <div className={` flex border border-black/10 rounded-xl   shadow-lg duration-200  text-black ${
            todo.completed ? "bg-[#c6e9a7]" : "bg-white"
        }`}>
            <input className='m-3 w-6 h-6' type='checkbox' checked={todo.completed}
                onChange={toggleCompleted}>
            </input>
            <input
                type="text"
                className={`border outline-none mr-2 w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/25 p-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <input className="italic mr-2 w-17 h-12  text-xs justify-center items-center bg-transparent border outline-none border-transparent" type='text' readOnly={true} value={`Created at: ${new Date(todo.id).toLocaleTimeString()}`}>
            </input>
            <button
              className="mr-2 ml-2 inline-flex mt-1 w-9 h-10 rounded-lg text-sm border-1 border-black/10 justify-center items-center bg-white hover:bg-yellow-300 shrink-0 disabled:opacity-50"
              onClick={(e) => { 
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
              title={isTodoEditable? 'Save' :'Edit'}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="mr-5 mt-1 inline-flex w-9 h-10 rounded-lg text-sm border-1 border-black/10 justify-center items-center bg-white hover:bg-red-300 shrink-0"
              onClick={() => deleteInputTodo(todo.id)}
              title='Delete'
          >
              ❌
          </button>
        </div>
       
    )
}

export default TodoItem
