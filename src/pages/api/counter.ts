import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('mydatabase');

  if (req.method === 'GET') {
    const counter = await db.collection('counter').findOne({ _id: new ObjectId('000000000000000000000000') });
    res.status(200).json({ value: counter ? counter.value : 0 });
  } else if (req.method === 'POST') {
    const result = await db.collection('counter').findOneAndUpdate(
      { _id: new ObjectId('000000000000000000000000') },
      { $inc: { value: 1 } },
      { returnDocument: 'after', upsert: true }
    );

    if (result) {
      const newValue = result.value ? result.value.value : 0;
      res.status(200).json({ value: newValue });
    } else {
      res.status(500).json({ error: 'Failed to update the counter' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
