import React, { useEffect, useState } from "react";
import { AppProps, Contador } from "../types";
import { getContadores, aumentarContador, disminuirContador, createContador, deleteContador } from "../services/contadores";

const App: React.FC<AppProps> = (props) => {
    const [contadores, setContadores] = useState<Contador[]>(props.contadores || [])
    const [contador, setContador] = useState<Contador>(props.contador)
    const [cantidad, setCantidad] = useState<number>(props.cantidad)
    const [color, setColor] = useState<string>('')

    //trae los contadores al cargar la pagina
    useEffect(() => {
        getContadores().then((contadores) => {
            setContadores(contadores)
        })
    }, [])

    //se actualizan los contadores cada 2 segundos
    useEffect(() => {
        setInterval(() => {
            getContadores().then((contadores) => {
                setContadores(contadores)
            })
        }, 2000)

    }, [])

    const handleAumentar = async (id: string) => {
        const updatedContador = await aumentarContador(id);
        setContadores(contadores.map(contador => contador.id === id ? updatedContador : contador));
    }

    const handleDisminuir = async (id: string) => {
        const updatedContador = await disminuirContador(id);
        setContadores(contadores.map(contador => contador.id === id ? updatedContador : contador));
    }

    const handleCreate = async () => {
        if (contadores.length < 10) {
            const newContador = await createContador(color);
            setContadores([...contadores, newContador]);
            //setColor('')
        } else {
            return alert('No se pueden crear más contadores!');
        }
    };

    const handleDelete = async (id: string) => {
        await deleteContador(id);
        setContadores(contadores.filter(contador => contador.id !== id));
    }


    const colors = [
        { label: 'Rojo', value: '#BB2A23' },
        { label: 'Verde', value: '#0E6B1A' },
        { label: 'Azul', value: '#1B3E6B' },
        { label: 'Amarillo', value: '#C0C513' },
        { label: 'Blanco', value: '#EFEFEA' },
        { label: 'Violeta', value: '#541AAA' },
        { label: 'Cyan', value: '#00FFFF' },
        { label: 'Magenta', value: '#FF00FF' },
        { label: 'Naranja', value: '#DA9709' },
    ]



    return (
        <main className="flex min-h-screen flex-col items-center ">
            <div className='pb-10'>
                <h1 className="font-bold text-5xl text-500 -"> TP4-B Contadores </h1>
            </div>
            <div className='flex flex-col items-center pb-10'>
                <h2 className="font-bold text-2xl"> Crear Contador </h2>
                <div className="flex flex-col items-center pb-10">
                    <div className="flex flex-row items-center">
                        <label className="text-white rounded-lg mt-2 font-bold uppercase">Color: </label>
                        <select name="color" id="color" value= {color} onChange={(e) => setColor(e.target.value)} className="text-white rounded-lg mt-2 font-bold uppercase bg-gray-950 p-2 placeholder: seleccionar">
                            {colors.map((color) => (
                                <option key={color.value} value={color.value} className="bg-black">
                                    {color.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button onClick={() => handleCreate()} className={`w-full p-2 bg-gray-950 text-white rounded-lg mt-2 font-bold uppercase duration-200 hover:bg-gray-800`}>Crear</button>
                </div>
            </div>
            <div>
                <ul className="flex flex-col items-center">
                    {contadores.map((contador) => (
                        <li key={contador.id} className="flex flex-row items-center space-x-4 rounded-lg mt-2 font-bold uppercase" style={{ color: contador.color }}>
                            <button className='font-bold text-3xl hover:bg-gray-800' onClick={() => handleAumentar(contador.id)}>+</button>
                            <button className='font-bold text-3xl hover:bg-gray-800' onClick={() => handleDisminuir(contador.id)}>-</button>
                            <span className='font-bold text-3xl'> Contador: {contador.numero}</span>
                            <button className="font-bold text-3xl hover:bg-gray-800" onClick={() => handleDelete(contador.id)}> X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default App;