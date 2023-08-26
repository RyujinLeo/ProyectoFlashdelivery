import mongoose from "mongoose";
import { Categoria } from "./categoria.model";

const schema = new mongoose.Schema<Categoria>({
    nombreCategoria: String,
    imagen: String
});

export const CategoriaSchema = mongoose.model('categorias', schema);