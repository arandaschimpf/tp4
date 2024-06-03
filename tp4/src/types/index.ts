"use server"

export type Contador = {
    id: string
    numero: number
    color: string
}

export type AppProps = {
    contadores: Contador[]
    contador: Contador
    cantidad: number    
}