import { useState } from 'react';
import './App.css';
import Card from './Components/cardview';


function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid Input');
      return;
    }

    switch (operator) {
      case 'add':
        setResult(num1 + num2);
        break;
      case 'subtract':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        setResult(num2 !== 0 ? num1 / num2 : 'Cannot divide by 0');
        break;
      default:
        setResult('Error');
    }
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline bg-stone-600">
        Hello world!
      </h1>
      <h1>Simple Calculator</h1>
      <div className="input-container">
        <input
          type="number"
          className="input-field"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="Enter value 1"
        />
        <input
          type="number"
          className="input-field"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          placeholder="Enter value 2"
        />
      </div>

      <div className="button-container">
        <button className="btn" onClick={() => handleCalculation('add')}>
          Add
        </button>
        <button className="btn" onClick={() => handleCalculation('subtract')}>
          Subtract
        </button>
        <button className="btn" onClick={() => handleCalculation('multiply')}>
          Multiply
        </button>
        <button className="btn" onClick={() => handleCalculation('divide')}>
          Divide
        </button>
      </div>

      {result !== null && (
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
      )}

      <div className='card-container'>
        <Card
          title="Beautiful Beach"
          description="Discover the serene and beautiful beaches around the world. Relax and unwind with a spectacular view."
          imageUrl='https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1800&t=st=1729281787~exp=1729282387~hmac=9d67670dae68eb2204bdb7c2a2d50c8b29f492ad13b874e4c0526781a9e9716c'
          buttonText="Explore"
        />    
        <Card
          title="Beautiful Beach"
          description="Discover the serene and beautiful beaches around the world. Relax and unwind with a spectacular view."
          imageUrl='https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1800&t=st=1729281787~exp=1729282387~hmac=9d67670dae68eb2204bdb7c2a2d50c8b29f492ad13b874e4c0526781a9e9716c'
          buttonText="Explore"
        />
        <Card
          title="Beautiful Beach"
          description="Discover the serene and beautiful beaches around the world. Relax and unwind with a spectacular view."
          imageUrl='https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1800&t=st=1729281787~exp=1729282387~hmac=9d67670dae68eb2204bdb7c2a2d50c8b29f492ad13b874e4c0526781a9e9716c'
          buttonText="Explore"
        />
         <Card
          title="Beautiful Beach"
          description="Discover the serene and beautiful beaches around the world. Relax and unwind with a spectacular view."
          imageUrl='https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1800&t=st=1729281787~exp=1729282387~hmac=9d67670dae68eb2204bdb7c2a2d50c8b29f492ad13b874e4c0526781a9e9716c'
          buttonText="Explore"
        />    
        <Card
          title="Beautiful Beach"
          description="Discover the serene and beautiful beaches around the world. Relax and unwind with a spectacular view."
          imageUrl='https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1800&t=st=1729281787~exp=1729282387~hmac=9d67670dae68eb2204bdb7c2a2d50c8b29f492ad13b874e4c0526781a9e9716c'
          buttonText="Explore"
        />
        <Card
          title="Beautiful Beach"
          description="Discover the serene and beautiful beaches around the world. Relax and unwind with a spectacular view."
          imageUrl='https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1800&t=st=1729281787~exp=1729282387~hmac=9d67670dae68eb2204bdb7c2a2d50c8b29f492ad13b874e4c0526781a9e9716c'
          buttonText="Explore"
        />
         <Card
          title="Beautiful Beach"
          description="Discover the serene and beautiful beaches around the world. Relax and unwind with a spectacular view."
          imageUrl='https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1800&t=st=1729281787~exp=1729282387~hmac=9d67670dae68eb2204bdb7c2a2d50c8b29f492ad13b874e4c0526781a9e9716c'
          buttonText="Explore"
        />    
        <Card
          title="Beautiful Beach"
          description="Discover the serene and beautiful beaches around the world. Relax and unwind with a spectacular view."
          imageUrl='https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1800&t=st=1729281787~exp=1729282387~hmac=9d67670dae68eb2204bdb7c2a2d50c8b29f492ad13b874e4c0526781a9e9716c'
          buttonText="Explore"
        />
        <Card
          title="Beautiful Beach"
          description="Discover the serene and beautiful beaches around the world. Relax and unwind with a spectacular view."
          imageUrl='https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1800&t=st=1729281787~exp=1729282387~hmac=9d67670dae68eb2204bdb7c2a2d50c8b29f492ad13b874e4c0526781a9e9716c'
          buttonText="Explore"
        />
      </div>
    </div>
  );
}

export default App;
