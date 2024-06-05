'use client'

import React, { useEffect, useState } from 'react';
import { incrementCounterValue } from '../app/actions'
import { createClient } from '@/utils/supabase/client'


const supabase = createClient();

export default function Counter({ counter }: { counter: Counter | null }) {
  // Definir el estado inicial del contador
  const [contador, setContador] = useState<Counter | null>(counter);

  useEffect(() => {
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
        },
        (payload) => { setContador(payload.new as Counter) }
      )
      .subscribe()
      return () => {
        supabase.removeChannel(channel);
      };

  }, []);


  const incrementarContador = async () => {

    if (contador?.value == 0) {
      await incrementCounterValue(contador.value + 1);
      const { value, ...props } = contador
      setContador({ value: value + 1, ...props });
    }

    else if (contador?.value) {
      await incrementCounterValue(contador.value + 1);
      const { value, ...props } = contador
      setContador({ value: value + 1, ...props });
    }

  };

  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <div className='p-10 bg-green-600 rounded-lg shadow-lg w-full h-full sm:w-3/4 lg:w-auto sm:h-3/4 lg:h-auto'>
        <div className='flex flex-col gap-32'>
          <h2>Contador: {contador?.value}</h2>
          <button onClick={incrementarContador}>Incrementar</button>
        </div>
      </div>
    </main>
  );
}
