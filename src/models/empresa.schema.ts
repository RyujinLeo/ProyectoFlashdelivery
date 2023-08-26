import mongoose from "mongoose";
import { Producto } from "./producto.model";
import { Empresa } from "./empresa.model";

const schema = new mongoose.Schema<Empresa>({
    nombre: String,
    logo: String,
    ubicacion: String,
    tiempoEnvio: String,
    costoEnvio: String,
    calificacion: String,
    favoritos: Boolean,
    productos: Array<Producto>,
    imagenLocal: String,
    recomendaciones: Object
});

export const EmpresaSchema = mongoose.model('empresas', schema);