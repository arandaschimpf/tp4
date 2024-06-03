import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [counter, setCounter] = useState<number | null>(null);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const response = await axios.get('/api/counter');
        setCounter(response.data.value);
      } catch (error) {
        console.error('Error fetching counter:', error);
      }
    };

    fetchCounter();
  }, []);

  const incrementCounter = async () => {
    try {
      const response = await axios.post('/api/counter');
      setCounter(response.data.value);
    } catch (error) {
      console.error('Error incrementing counter:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {counter !== null ? counter : 'Cargando...'}</h1>
      <button onClick={incrementCounter} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Incrementar
      </button>
    </div>
  );
};

export default Home;
