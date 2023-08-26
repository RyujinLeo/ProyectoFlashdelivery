import mongoose from "mongoose";
import { BaseUsuario } from "./usuario.model";

export interface Administrador extends BaseUsuario {
    imagenAdministrador: string;
}