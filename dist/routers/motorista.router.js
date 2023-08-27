"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const motorista_controller_1 = require("../controllers/motorista.controller");
const router = express_1.default.Router();
//Verificacion de un motorista
//http://localhost:3000/motoristas/login
router.post('/login-motorista', motorista_controller_1.loginMotorista);
//Obtener los detalles de un motorista
//http://localhost:3000/motoristas/:id
router.get('/:id', motorista_controller_1.obtenerDetalleMotorista);
//Obtener todos los motorista
//http://localhost:3000/motoristas
router.get('/', motorista_controller_1.obtenerMotoristas);
//obtener ordenes de un motorista
//http://localhost:3000/motoristas/:id/ordenes
router.get('/:id/ordenes', motorista_controller_1.obtenerOrdenesMotorista);
//Obtener motoristas disponibles
//http://localhost:3000/motoristas/disponibles
router.get('/:estado-disponible', motorista_controller_1.obtenerMotoristasDisponibles);
//Registrar un nuevo motorista
router.post('/', motorista_controller_1.registrarMotorista);
exports.default = router;
