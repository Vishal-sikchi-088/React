import './App.css';
import Login from './components/login';
import Profile from './components/profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
  <div className='App'>
    <UserContextProvider>
      <h1>Welcome</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  </div>
    
  );
}

export default App;
