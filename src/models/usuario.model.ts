import mongoose from "mongoose";

export interface BaseUsuario {
    _id?: mongoose.Types.ObjectId;
    nombre: string;
    identidad: string;
    correo: string;
    contrasena: string;
    telefono: string;
} 

export interface Usuario extends BaseUsuario {
    direccion: string;
    pedidos: Array<mongoose.Types.ObjectId>;
    imagenUsuario: string;
}