import {Request, Response } from 'express';
import { ProductoSchema } from '../models/producto.schema';

export const obtenerProductos = async (req: Request, res: Response) => {

    const producto = await ProductoSchema.find().limit(64);
    if (producto) {
        res.send({status: true, message: 'Productos obtenidos con exito', producto});
    }
    else
        res.send({status:false, message: 'Productos no encontrados'});
    res.end();
}
