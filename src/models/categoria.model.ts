import mongoose from "mongoose";

export interface Categoria {
    _id?: mongoose.Types.ObjectId;
    nombreCategoria: string;
    imagen:  string;
}