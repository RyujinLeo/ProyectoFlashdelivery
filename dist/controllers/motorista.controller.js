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
exports.registrarMotorista = exports.obtenerMotoristasDisponibles = exports.obtenerMotoristas = exports.obtenerDetalleMotorista = exports.obtenerOrdenesMotorista = exports.loginMotorista = void 0;
const motorista_schema_1 = require("../models/motorista.schema");
const loginMotorista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const motorista = yield motorista_schema_1.MotoristaSchema.findOne({ correo: req.body.correo, contrasena: req.body.contrasena });
    if (motorista) {
        res.send({ status: true, message: 'Login correcto', motorista });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.loginMotorista = loginMotorista;
const obtenerOrdenesMotorista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const motorista = yield motorista_schema_1.MotoristaSchema.findById(req.params.id, { ordenes: true });
    if (motorista) {
        res.send({ status: true, message: 'Ordenes obtenidas con exito', ordenes: motorista.ordenes });
    }
    else
        res.send({ status: false, message: 'Ordenes no encontradas' });
    res.end();
});
exports.obtenerOrdenesMotorista = obtenerOrdenesMotorista;
const obtenerDetalleMotorista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const motorista = yield motorista_schema_1.MotoristaSchema.findById(req.params.id);
    if (motorista) {
        res.send({ status: true, message: 'Detalles motorista obtenidas con exito', motorista });
    }
    else
        res.send({ status: false, message: 'Detalles motorista no encontradas' });
    res.end();
});
exports.obtenerDetalleMotorista = obtenerDetalleMotorista;
const obtenerMotoristas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const motorista = yield motorista_schema_1.MotoristaSchema.find().limit(2);
    if (motorista) {
        res.send({ status: true, message: 'Motoristas obtenidos con exito', motorista });
    }
    else
        res.send({ status: false, message: 'Motoristas no encontrados' });
    res.end();
});
exports.obtenerMotoristas = obtenerMotoristas;
const obtenerMotoristasDisponibles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const motorista = yield motorista_schema_1.MotoristaSchema.find({ estado: req.params.disponible }, {});
    if (motorista) {
        res.send({ status: true, message: 'Motoristas disponibles obtenidos con exito', motorista });
    }
    else
        res.send({ status: false, message: 'Motoristas disponibles no encontrados' });
    res.end();
});
exports.obtenerMotoristasDisponibles = obtenerMotoristasDisponibles;
const registrarMotorista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Registar motorista esta funcionando');
    res.end();
});
exports.registrarMotorista = registrarMotorista;
