import mongoose, { Schema } from 'mongoose';

const counterSchema = new Schema({
    count: Number, //para el contador
 }
);

const Counter = mongoose.models.Counter || mongoose.model("Counter", counterSchema);

export default Counter;