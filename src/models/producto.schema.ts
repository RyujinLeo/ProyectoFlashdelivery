import mongoose from "mongoose";
import { Producto } from "./producto.model";

const schema = new mongoose.Schema<Producto>({
    nombreProducto: String,
    precio: String,
    imagenProducto: String
});

export const ProductoSchema = mongoose.model('productos', schema);