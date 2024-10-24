import './App.css';
import InputField from './components/inputField';
import TodoItem from './components/TodoItem';
import { useSelector} from 'react-redux'


function App() {
  
  const todoList = useSelector((state) => state.Todos).slice().sort((a, b) => b.id - a.id);  
  return (

      <div className=" bg-white-100 w-full h-screen">
          <div className='text-black ml-56 mr-56 mb-10 mt-20 p-5 text-4xl flex justify-center shadow-2xl rounded-full shadow-slate-800'>
            <img alt='todo-img' className='bg-white w-10 h-10 mt-1 mr-3' src='https://cdn-icons-png.flaticon.com/256/1/1560.png'></img>Manage your Todos
          </div>
          <InputField>
          </InputField>

          <div className="w-full md:w-7/12 mt-7 mx-auto flex flex-col max-h-[440px] overflow-y-auto custom-scrollbar">
            {todoList.length === 0 ? (
              <p className="text-center text-gray-500">No todos yet, add one!</p>
            ) : (
              todoList
              .map((todoItem) => (
                <div key={todoItem.id} className="m-1">
                  <TodoItem todo={todoItem} />
                </div>
              ))
            )}
          </div>
      </div>
  );
}

export default App;
