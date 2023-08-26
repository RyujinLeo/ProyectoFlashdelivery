"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = express_1.default.Router();
//Verificación usuario/cliente
//http://localhost:3000/usuarios/login
router.post('/login', usuario_controller_1.login);
//Obtener pedidos del usuario
//http://localhost:3000/usuarios/:id/pedidos
router.get('/:id/pedidos', usuario_controller_1.obtenerPedidosUsuario);
exports.default = router;
