"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empresa_controller_1 = require("../controllers/empresa.controller");
const router = express_1.default.Router();
//Obtener todas las empresas
//http://localhost:3000/empresas
router.get('/', empresa_controller_1.obtenerEmpresas);
//obtener los productos de una empresa
//http://localhost:3000/empresas/:id/productos
router.get('/:id/productos', empresa_controller_1.obtenerProductosUnaEmpresa);
//obtener las recomendaciones de una empresa
//http://localhost:3000/empresas/:id/recomendaciones
router.get('/:id/recomendaciones', empresa_controller_1.obtenerRecomendacionesUnaEmpresa);
exports.default = router;
