"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Categoria_controller_1 = require("../controllers/Categoria.controller");
const router = express_1.default.Router();
//Obtener las Categorias de la pagina proincipal del cliente
router.get('/', Categoria_controller_1.obtenerCategorias);
exports.default = router;
