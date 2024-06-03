'use client'
import { useState, useEffect} from 'react'
import { getContadores, getContador, aumentarContador, disminuirContador, createContador, type Contador } from '../services/contadores'
import { count } from 'console';

type AppProps = {
  contadores: Contador[]
  contador: Contador
  cantidad: number

}
export default function App(props: AppProps) {
  const [contadores, setContadores] = useState<Contador[]>(props.contadores || [])
  const [contador, setContador] = useState<Contador>(props.contador)
  const [cantidad, setCantidad] = useState<number>(props.cantidad)
  

  
  useEffect(() => {
    getContadores().then((contadores) => {
      console.log(contadores)
      setContadores(contadores)
    })
  }, [])
  
 // que se actualiza cada vez que se aumenta o disminuye el contador
  useEffect(() => {

  }, [])


  const handleAumentar = async (id: string) => {
  const updatedContador = await aumentarContador(id);
  setContadores(contadores.map(contador => contador.id === id ? updatedContador : contador));
}

const handleDisminuir = async (id: string) => {
  const updatedContador = await disminuirContador(id);
  setContadores(contadores.map(contador => contador.id === id ? updatedContador : contador));
}

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className='pb-10'>
      <h1 className="font-bold text-5xl text-500 -"> Contadores </h1>
      </div>
      <div>
      <ul className="flex flex-col items-center">
        {contadores.map((contador) => (
          <li key={contador.id} className="flex flex-row items-center space-x-4">
            <span className='font-bold text-3xl'> Contador:{contador.numero}</span>
            <button onClick={() => handleAumentar(contador.id)}>+</button>
            <button onClick={() => handleDisminuir(contador.id)}>-</button>
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
}
