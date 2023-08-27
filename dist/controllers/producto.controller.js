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
exports.obtenerProductos = void 0;
const producto_schema_1 = require("../models/producto.schema");
const obtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const producto = yield producto_schema_1.ProductoSchema.find().limit(64);
    if (producto) {
        res.send({ status: true, message: 'Productos obtenidos con exito', producto });
    }
    else
        res.send({ status: false, message: 'Productos no encontrados' });
    res.end();
});
exports.obtenerProductos = obtenerProductos;
