import mongoose from "mongoose";
import { Usuario } from "./usuario.model";

const schema = new mongoose.Schema<Usuario>({
    nombre: String,
    identidad: String,
    correo: String,
    contrasena: String,
    telefono: String,
    direccion: String,
    imagenUsuario: String
});

export const UsuarioSchema = mongoose.model('usuarios', schema);