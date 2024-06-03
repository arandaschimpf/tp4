import mongoose, { Model, Document } from 'mongoose';

interface ICounter extends Document {
  count: number;
}

const CounterSchema = new mongoose.Schema<ICounter>({
  count: {
    type: Number
  },
});

let Counter: Model<ICounter>;

try {
  Counter = mongoose.model<ICounter>('Counter'); // Specify the type parameter for mongoose.model
} catch {
  Counter = mongoose.model('Counter', CounterSchema);
}

export default Counter;