import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/counter');
        console.log('Valor del contador obtenido:', response.data.value); // Agrega este console.log
        setCounter(response.data.value);
      } catch (error) {
        console.error('Error al obtener el contador:', error.message); // Agrega este console.error
      }
    };
    fetchCounter();
  }, []);

  const incrementCounter = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/counter/increment');
      console.log('Respuesta del servidor:', response.data); // Agrega este console.log
      setCounter(response.data.value);
    } catch (error) {
      console.error('Error al incrementar el contador:', error.message); // Agrega este console.error
    }
  };

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
};

export default App;
