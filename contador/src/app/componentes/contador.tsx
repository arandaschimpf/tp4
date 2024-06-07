'use client'
// components/Counter.tsx
import { useEffect, useState } from 'react';
import { doc, increment, setDoc, updateDoc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';

const Counter = () => {
  const counterDocRef = doc(db, 'counters', 'sharedCounter');
  const [value, loading, error] = useDocument(counterDocRef);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (value?.exists()) {
      const newCount = value.data()?.count || 0;
      if (newCount !== counter) {
        setCounter(newCount);
      }
    } else if (!loading) {
      setDoc(counterDocRef, { count: 0 });
    }
  }, [value, loading, counter, counterDocRef]);

  const incrementCounter = async () => {
    await updateDoc(counterDocRef, { count: increment(1) });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl">{counter}</h1>
      <button
        onClick={incrementCounter}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
