import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='show'>
        {count}
      </div>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(count + 1)} style={{ float: 'right' }}>increment</button>
      
      <button className=" dark" onClick={toggleTheme} style={{ display: 'block', marginTop: '20px' }}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;
