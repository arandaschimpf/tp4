import React, { useEffect, useState } from "react";
import { AppProps, Contador } from "../types";
import { getContadores, aumentarContador, disminuirContador } from "../services/contadores";

const App: React.FC<AppProps> = (props) => {
    const [contadores, setContadores] = useState<Contador[]>(props.contadores || [])
    const [contador, setContador] = useState<Contador>(props.contador)
    const [cantidad, setCantidad] = useState<number>(props.cantidad)

    useEffect(() => {
        getContadores().then((contadores) => {
            console.log(contadores)
            setContadores(contadores)
        })
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
                            <button className='font-bold text-3xl' onClick={() => handleAumentar(contador.id)}>+</button>
                            <button className='font-bold text-3xl' onClick={() => handleDisminuir(contador.id)}>-</button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default App;