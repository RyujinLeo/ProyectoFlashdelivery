import {Request, Response} from 'express';
import { CategoriaSchema } from '../models/categoria.schema';


export const obtenerCategorias = async (req: Request, res: Response) => {
    const categoria = await CategoriaSchema.find().limit(4);
    if (categoria) {
        res.send({status:true, message: 'Categorias encontradas con exito', categoria});
    }
    else
        res.send({status: false, message: 'Categorias no encontradas'});
    res.end();
}
