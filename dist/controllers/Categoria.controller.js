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
exports.obtenerCategorias = void 0;
const categoria_schema_1 = require("../models/categoria.schema");
const obtenerCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield categoria_schema_1.CategoriaSchema.find().limit(4);
    if (categoria) {
        res.send({ status: true, message: 'Categorias encontradas con exito', categoria });
    }
    else
        res.send({ status: false, message: 'Categorias no encontradas' });
    res.end();
});
exports.obtenerCategorias = obtenerCategorias;
