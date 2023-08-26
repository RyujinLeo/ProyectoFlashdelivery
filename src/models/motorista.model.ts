import mongoose from "mongoose";

export interface Motorista {
    _id?: mongoose.Types.ObjectId;
    estado: string;
    nombre: string;
    identidad: string;
    correo: string;
    contrasena: string;
    telefono: string;
    direccion: string;
    imagenMotorista: string;
    ordenes: Array<mongoose.Types.ObjectId>;
}