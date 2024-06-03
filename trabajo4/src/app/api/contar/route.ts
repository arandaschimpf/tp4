import { connectDB } from "@/libs/mongodb";
import contador from "@/models/contador";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(request: Request) {
    try {
        // Conecta a la base de datos MongoDB
        await connectDB();

        // Extrae los datos del cuerpo de la solicitud
        const { total } = await request.json();
        console.log(total);

        // Crea un nuevo documento utilizando el modelo de contador
        const newContador = new contador({ total });
        console.log(newContador);

        // Guarda el nuevo documento en la base de datos
        await newContador.save();

        // Responde con el nuevo documento creado
        return NextResponse.json({
            contador: newContador
            
        });
    } catch (error) {
        // Maneja cualquier error que ocurra durante el proceso
        console.error("Error al crear contador:", error);
        return NextResponse.error();
    }
}
export async function GET (){
    try {
        await connectDB();
        console.log("LLEGO al get");
        const count = await contador.countDocuments({});
        return NextResponse.json({
            total: count
        });
    } catch (error) {
        return NextResponse.error();
    }
}