"use client"

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    const response = await fetch('/api/counter', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newCount: count + 1 }),
    });
    const data = await response.json();
    setCount(data.count);
  };

  return (
   
      <div className="flex min-h-screen flex-col items-center justify-center space-y-4 p-24 text-4xl">
        <p>Count: {count === null ? 'Loading...' : count}</p>
        <button onClick={fetchCount}>+</button>
      </div>
    );
  
}