'use server'
import { NextApiRequest, NextApiResponse } from 'next';
import { getCounter, incrementCounter } from '../../services/Counter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const counter = await getCounter();
      if (counter) {
        res.status(200).json({ value: counter.value });
      } else {
        res.status(404).json({ message: 'Counter not found' });
      }
    } else if (req.method === 'POST') {
      const updatedCounter = await incrementCounter();
      res.status(200).json({ value: updatedCounter.value });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}