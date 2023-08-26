import express, { Request, Response, Express } from 'express';
import { Database } from './utils/database';
import cors from 'cors';
import usuarioRouter from './routers/usuario.router';

const app:Express = express();
const db:Database = new Database();
app.use(cors());
app.use(express.json());
app.use('/usuarios', usuarioRouter);


app.get("/", (req:Request, res:Response) => {
    res.send("Servidor para el proyecto");
    res.end();
});

app.listen(3000, () => {
    console.log("Servidor levantado en el puerto 3000");
});
