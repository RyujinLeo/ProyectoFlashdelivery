"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministradorSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombre: String,
    identidad: String,
    correo: String,
    contrasena: String,
    telefono: String,
    imagenAdministrador: String
});
exports.AdministradorSchema = mongoose_1.default.model('administradores', schema);
