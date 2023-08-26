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
exports.obtenerRecomendacionesUnaEmpresa = exports.obtenerProductosUnaEmpresa = exports.obtenerEmpresas = void 0;
const empresa_schema_1 = require("../models/empresa.schema");
const obtenerEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresa = yield empresa_schema_1.EmpresaSchema.find().limit(16);
    if (empresa) {
        res.send({ status: true, message: 'Empresas encontradas con exito', empresa });
    }
    else
        res.send({ status: false, message: 'Empresas no encontradas' });
    res.end();
});
exports.obtenerEmpresas = obtenerEmpresas;
const obtenerProductosUnaEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresa = yield empresa_schema_1.EmpresaSchema.findById(req.params.id, { productos: true });
    if (empresa) {
        res.send({ status: true, message: 'Productos obtenidos con exito', productos: empresa.productos });
    }
    else
        res.send({ status: false, message: 'Recomendaciones no encontradas' });
    res.end();
});
exports.obtenerProductosUnaEmpresa = obtenerProductosUnaEmpresa;
const obtenerRecomendacionesUnaEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresa = yield empresa_schema_1.EmpresaSchema.findById(req.params.id, { recomendaciones: true });
    if (empresa) {
        res.send({ status: true, message: 'Recomendaciones obtenidas con exito', recomendaciones: empresa.recomendaciones });
    }
    else
        res.send({ status: false, message: 'Recomendaciones no encontradas' });
    res.end();
});
exports.obtenerRecomendacionesUnaEmpresa = obtenerRecomendacionesUnaEmpresa;
