import './App.css';
import {useState} from 'react'

function App() {
  const [color, setColor] = useState('olive')
  return (
    <div className="bg-slate-600 w-full h-screen"
    style={{backgroundColor: color}}>

      <div className='bottom-12 fixed flex flex-wrap justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button onClick={() => setColor('red')} className='bg-red-700 rounded-3xl px-2 py-2 text-white shadow-xl'>Red</button>
          <button onClick={() => setColor('blue')} className='bg-blue-700 rounded-3xl px-2 py-2 text-white shadow-xl'>Blue</button>
          <button onClick={() => setColor('green')} className='bg-green-900 rounded-3xl px-2 py-2 text-white shadow-xl'>Green</button>
          <button onClick={() => setColor('black')} className='bg-black rounded-3xl px-2 py-2 text-white shadow-xl'>Black</button>
        </div>
      </div>
    
    </div>
  );
}

export default App;
