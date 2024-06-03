import mongoose, { Schema } from "mongoose";
interface Contador {
    total: number;
}
const contadorSchema = new Schema<Contador>({
    total: {
        type: Number,
        required: true,
    },
});
export default mongoose.models.Contador || mongoose.model<Contador>('Contador', contadorSchema);