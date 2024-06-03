"use client"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  interface Contador {
    total: number;
  }
  const [count, setCount] = useState<Contador | null>(null);

  async function incrementar() {
    try {
      await axios.post('/api/contar', { total: 1 });
      obtener();
    } catch (error) {
      console.error('Error incrementing contador:', error);
    }
  }

  async function obtener() {
    try {
      const response = await axios.get('/api/contar');
      setCount(response.data);
    } catch (error) {
      console.error('Error fetching contador data:', error);
    }
  }
  console.log(count?.total);

  useEffect(() => {
    obtener();    
  }, []);

  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="relative">
        <div className="flex justify-center items-center">
          {count && <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center z-10">{count.total}</div>}
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 relative z-10" onClick={incrementar}>Aumentar</button>
        </div>
      </div>
    </main>
  );
}
