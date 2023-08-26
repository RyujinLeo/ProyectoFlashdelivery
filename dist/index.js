"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./utils/database");
const cors_1 = __importDefault(require("cors"));
const usuario_router_1 = __importDefault(require("./routers/usuario.router"));
const empresa_router_1 = __importDefault(require("./routers/empresa.router"));
const categoria_router_1 = __importDefault(require("./routers/categoria.router"));
const app = (0, express_1.default)();
const db = new database_1.Database();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/usuarios', usuario_router_1.default);
app.use('/empresas', empresa_router_1.default);
app.use('/categorias', categoria_router_1.default);
app.get("/", (req, res) => {
    res.send("Servidor para el proyecto");
    res.end();
});
app.listen(3000, () => {
    console.log("Servidor levantado en el puerto 3000");
});
