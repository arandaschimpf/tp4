import mongoose, { Schema, Document } from 'mongoose';

interface CounterDocument extends Document {
  value: number;
}

const CounterSchema = new Schema<CounterDocument>({
  value: { type: Number, required: true, default: 0 },
});

export default mongoose.models.Counter || mongoose.model<CounterDocument>('Counter', CounterSchema);
