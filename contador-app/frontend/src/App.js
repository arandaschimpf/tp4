import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchCounter = async () => {
      const response = await axios.get('http://localhost:5000/api/counter');
      setCounter(response.data.value);
    };
    fetchCounter();
  }, []);

  const incrementCounter = async () => {
    const response = await axios.post('http://localhost:5000/api/counter/increment');
    setCounter(response.data.value);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default App;
