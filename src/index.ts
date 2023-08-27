import express, { Request, Response, Express } from 'express';
import { Database } from './utils/database';
import cors from 'cors';
import usuarioRouter from './routers/usuario.router';
import empresaRouter from './routers/empresa.router';
import categoriaRouter from './routers/categoria.router';
import motoristaRouter from './routers/motorista.router';
import productoRouter from './routers/producto.router';

const app:Express = express();
const db:Database = new Database();
app.use(cors());
app.use(express.json());
app.use('/usuarios', usuarioRouter);
app.use('/empresas', empresaRouter);
app.use('/categorias', categoriaRouter);
app.use('/motoristas',motoristaRouter);
app.use('/productos', productoRouter);


app.get("/", (req:Request, res:Response) => {
    res.send("Servidor para el proyecto");
    res.end();
});

app.listen(3000, () => {
    console.log("Servidor levantado en el puerto 3000");
});
