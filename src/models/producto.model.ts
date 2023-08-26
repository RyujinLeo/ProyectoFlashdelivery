import mongoose from "mongoose";

export interface Producto {
    _id?: mongoose.Types.ObjectId;
    nombreProducto: string;
    precio: string;
    imagenProducto: string;
}