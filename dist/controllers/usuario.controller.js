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
exports.obtenerPedidosUsuario = exports.login = void 0;
const usuario_schema_1 = require("../models/usuario.schema");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuario_schema_1.UsuarioSchema.findOne({ correo: req.body.correo, contrasena: req.body.contrasena });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.login = login;
const obtenerPedidosUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuario_schema_1.UsuarioSchema.findById(req.params.id, { pedidos: true });
    if (usuario) {
        res.send({ status: true, message: 'Pedidos obtenidos con exito', pedidos: usuario.pedidos });
    }
    else
        res.send({ status: false, message: 'Usuario no existe' });
    res.end();
});
exports.obtenerPedidosUsuario = obtenerPedidosUsuario;
