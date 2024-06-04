import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [counter, setCounter] = useState<number | null>(null);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const response = await axios.get('/api/counter');
        const initialCounter = response.data.value;
        setCounter(initialCounter);
      } catch (error) {
        console.error('Error fetching counter:', error);
      }
    };

    fetchCounter();
  }, []);

  const incrementCounter = async () => {
    try {
      const response = await axios.post('/api/counter');
      const newCounter = response.data.value;
      setCounter(newCounter);
    } catch (error) {
      console.error('Error incrementing counter:', error);
    }
  };

  return (
    <main className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Counter</h1>
        <div className="text-6xl font-bold text-blue-600 mb-4">
          {counter !== null && counter}
        </div>
        <button
          onClick={incrementCounter}
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition-colors"
        >
          Aumentar
        </button>
      </div>
    </main>
  );
}
