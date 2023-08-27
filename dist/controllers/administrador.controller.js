"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerAdministradores = exports.loginAdministrador = void 0;
const administrador_schema_1 = require("../models/administrador.schema");
const loginAdministrador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const administrador = yield administrador_schema_1.AdministradorSchema.findOne({ correo: req.body.correo, contrasena: req.body.contrasena });
    if (administrador) {
        res.send({ status: true, message: 'Login correcto', administrador });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.loginAdministrador = loginAdministrador;
const obtenerAdministradores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const administrador = yield administrador_schema_1.AdministradorSchema.find().limit(2);
    if (administrador) {
        res.send({ status: true, message: 'Administradores obtenidos con exito', administrador });
    }
    else
        res.send({ status: false, message: 'Administradores no encontrados' });
    res.end();
});
exports.obtenerAdministradores = obtenerAdministradores;
