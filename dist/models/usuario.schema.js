"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombre: String,
    identidad: String,
    correo: String,
    contrasena: String,
    telefono: String,
    direccion: String,
    pedidos: (Array),
    imagenUsuario: String
});
exports.UsuarioSchema = mongoose_1.default.model('usuarios', schema);
