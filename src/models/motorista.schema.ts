import mongoose from "mongoose";
import { Motorista } from "./motorista.model";

const schema = new mongoose.Schema<Motorista>({
    estado: String,
    nombre: String,
    identidad: String,
    correo: String,
    contrasena: String,
    telefono: String,
    direccion: String,
    imagenMotorista: String,
    ordenes: Array<mongoose.Types.ObjectId>
});

export const MotoristaSchema = mongoose.model('motoristas', schema);