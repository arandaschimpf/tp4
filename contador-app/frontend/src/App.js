import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [counter, setContador] = useState(0);

  useEffect(() => {
    const fetchContador = async () => {
      const response = await axios.get('http://localhost:5000/api/counter');
      setContador(response.data.value);
    };
    fetchContador();
  }, []);

  const incrementContador = async () => {
    const response = await axios.post('http://localhost:5000/api/counter/increment');
    setContador(response.data.value);
  };

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementContador}>Increment</button>
    </div>
  );
};

export default App;
