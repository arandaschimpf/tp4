import mongoose, { Schema } from 'mongoose';

const counterSchema = new Schema({
    count: { type: Number, default: 0 }, 
  });

const Counter = mongoose.models.Counter || mongoose.model("Counter", counterSchema);

export default Counter;