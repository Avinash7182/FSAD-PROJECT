import { useState } from 'react';
import logo from './logo.svg';
//import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, Avinash! 👋</h1>
        <p>Welcome to your React app.</p>
        <button onClick={handleClick}>
          You clicked {count} {count === 1 ? 'time' : 'times'}
        </button>
      </header>
    </div>
  );
}

export default App;
