import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const response = await axios.get('https://contador-j6a99n3n6-faree2002s-projects.vercel.app/api/counter');
        console.log('Valor del contador obtenido:', response.data.value); 
        setCounter(response.data.value);
      } catch (error) {
        console.error('Error al obtener el contador:', error.message); 
      }
    };
    fetchCounter();
  }, []);

  const incrementCounter = async () => {
    try {
      const response = await axios.post('https://contador-j6a99n3n6-faree2002s-projects.vercel.app/api/counter/increment');
      console.log('Respuesta del servidor:', response.data); 
      setCounter(response.data.value);
    } catch (error) {
      console.error('Error al incrementar el contador:', error.message); 
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
