'use client';

import { useState, useEffect } from 'react';

type CounterResponse = {
  count: number;
};

export default function Home() {
  const [counter, setCounter] = useState<number | null>(null);

  useEffect(() => {
    const fetchCounter = async () => {
      const response = await fetch('/api/counter');
      const data: CounterResponse = await response.json();
      setCounter(data.count);
    };

    fetchCounter();
  }, []);

  const incrementCounter = async () => {
    const response = await fetch('/api/counter', {
      method: 'POST',
    });
    const data: CounterResponse = await response.json();
    setCounter(data.count);
  };

  /*if (counter === null) {
    return <div className="container">Loading...</div>;
  }*/

  return (
    <div className="container">
      <h1>Contador Incremental</h1>
      <div>Counter: {counter}</div>
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
}
