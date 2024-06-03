"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch the initial count from the database when the component mounts
    const fetchCount = async () => {
      const res = await fetch('/api/counter');
      const data = await res.json();
      setCount(data.count);
    };

    fetchCount();
  }, []);

  const handleClick = async () => {
    // Update the count in the database and the state when the button is clicked
    const res = await fetch('/api/counter', { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newCount: count + 1 }),
    });
    const data = await res.json();
    setCount(data.count);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 style={{textShadow: '3px 3px 2px rgba(255, 0, 0, 0.5)'}} className="text-4xl font-bold mb-6 text-center w-full text-red-500"> COUNTER </h2>
      <div className="text-center">
        <h1 className="text-2xl mb-4">Contador: {count}</h1>
        <button onClick={handleClick} className="w-full p-1 text-black border border-black rounded-lg font-bold uppercase hover:bg-gray-300">Incrementar contador</button>
      </div>
    </div>
  );
}