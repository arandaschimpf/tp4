import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/mongodb';
import Counter from '@/models/counter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Conectar a la base de datos MongoDB antes de procesar la solicitud
    await connectDB;

    if (req.method === 'GET') {
      // Manejar solicitudes GET
      const counter = await Counter.findOne();
      if (!counter) {
        return res.status(200).json({ value: 0 });
      }
      return res.status(200).json({ value: counter.value });
    } else if (req.method === 'POST') {
      // Manejar solicitudes POST
      const counter = await Counter.findOneAndUpdate(
        {},
        { $inc: { value: 1 } },
        { new: true, upsert: true }
      );
      return res.status(200).json({ value: counter.value });
    } else {
      // Manejar otros métodos HTTP
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    // Manejar errores
    console.error('Error en la API route:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
