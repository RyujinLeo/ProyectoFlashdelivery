import mongoose from "mongoose";
import { Administrador } from "./administrador.model";

const schema = new mongoose.Schema<Administrador>({
    nombre: String,
    identidad: String,
    correo: String,
    contrasena: String,
    telefono: String,
    imagenAdministrador: String
});

export const AdministradorSchema = mongoose.model('administradores', schema);