import express, { Request, Response, Express } from 'express';
import { Database } from './utils/database';
import cors from 'cors';

const app:Express = express();
const db:Database = new Database();
app.use(cors());
app.use(express.json());


app.get("/", (req:Request, res:Response) => {
    res.send("Servidor para el proyecto");
    res.end();
});

app.listen(3001, () => {
    console.log("Servidor levantado en el puerto 3001");
});