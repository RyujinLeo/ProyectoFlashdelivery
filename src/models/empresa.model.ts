import mongoose from "mongoose";
import { Producto } from "./producto.model";

export interface Recomendaciones {
    nombreProducto: string;
    precio: string;
    imagenProducto: string;
}

export interface Empresa {
    _id?: mongoose.Types.ObjectId;
    nombre: string;
    logo: string;
    ubicacion: string;
    tiempoEnvio: string;
    costoEnvio: string;
    calificacion: string;
    favoritos: boolean |null;
    productos: Array<Producto>;
    imagenLocal: string;
    recomendaciones: Recomendaciones;
}