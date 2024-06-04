//El subdominio en vercel es: https://tp4-roan.vercel.app/
'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function incrementarN() {
const c = await prisma.boton.findFirst({})
let x = c?.contador 

if(x){
    x = x +1
} else{
    x = 1
}

const boton = await prisma.boton.update({
    where:{
        id:c?.id
    },
    data:{
        contador:x
    }
})
return boton.contador
} 
export async function resetN() {
    const c = await prisma.boton.findFirst({})   
    const boton = await prisma.boton.update({
        where:{
            id:c?.id
        },
        data:{
            contador:0
        }
    
    })
    return boton.contador
    } 