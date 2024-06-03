'use client'
import { useEffect, useState } from 'react';
import "../styles/index.css";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const fetchCounter = async () => {
    const response = await fetch('/api/counter');
    const data = await response.json();
    setCounter(data.value);
  };

  const incrementCounter = async () => {
    await fetch('/api/counter', { method: 'POST' });
    fetchCounter();
  };

  // useEffect(() => {
  //   fetchCounter();
  // }, []);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
}