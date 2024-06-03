"use client"
import React from "react"
import App from "../components/App"
import { AppProps } from "../types"

const props: AppProps = {
    contadores: [],
    contador: {
        id: "1",
        numero: 0,
        color: "white"
    },
    cantidad: 0
}

const Page: React.FC = () => {
    return <App {...props} />
}

export default Page