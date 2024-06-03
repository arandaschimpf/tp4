'use server'
import { PrismaClient } from "@prisma/client"
import { create } from "domain"

const prisma = new PrismaClient()

export type Contador = {
    id: string
    numero: number
    color: string
}
export async function getContadores() {
  return await prisma.contadores.findMany()
}

export async function aumentarContador(id: string) {
  return await prisma.contadores.update({
    where: { id },
    data: {
      numero: {
        increment: 1
      }
    }
  })
}

export async function disminuirContador(id: string) {
  return await prisma.contadores.update({
    where: { id },
    data: {
      numero: {
        decrement: 1
      }
    }
  })
}

export async function createContador() {
    return await prisma.contadores.create({
        data: {
        numero: 0,
        color: "white"
        }
    })
}

export async function getContador(id: string) {
    return await prisma.contadores.findUnique({
        where: { id }
    })
}