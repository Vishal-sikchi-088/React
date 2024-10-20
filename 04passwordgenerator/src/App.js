import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [passLength, setPassLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+-={}[]:;"<>,./|~`';

    for (let index = 0; index < passLength; index++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [passLength, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passLength, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = () => {
    passwordRef.current.select()  
    navigator.clipboard.writeText(password);
    // alert('Password copied to clipboard!');
  };

  return (
    <div className="mt-32 w-full max-w-md mx-auto shadow-lg rounded-lg bg-gray-800 text-orange-500 px-6 py-6">
      <h1 className="text-2xl text-white text-center mb-4">Password Generator</h1>

      <div className="flex shadow-md rounded overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="outline-none w-full py-2 px-3 text-gray-900"
          placeholder="Generated Password"
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2"
        >
          Copy
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-white mb-1">Length: {passLength}</label>
        <input
          type="range"
          min={6}
          max={100}
          value={passLength}
          onChange={(e) => setPassLength(parseInt(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="flex items-center mb-3">
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={(e) => setNumberAllowed(e.target.checked)}
          className="cursor-pointer mr-2"
        />
        <label className="text-white">Include Numbers</label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={(e) => setCharAllowed(e.target.checked)}
          className="cursor-pointer mr-2"
        />
        <label className="text-white">Include Special Characters</label>
      </div>
    </div>
  );
}

export default App;
