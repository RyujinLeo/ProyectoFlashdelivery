import {Request, Response} from 'express';
import { EmpresaSchema } from '../models/empresa.schema';


export const obtenerEmpresas = async (req: Request, res: Response) => {
    const empresa = await EmpresaSchema.find().limit(16);
    if (empresa) {
        res.send({status: true, message: 'Empresas encontradas con exito', empresa});
    }
    else
        res.send({status: false, message: 'Empresas no encontradas'});
    res.end();
}

export const obtenerProductosUnaEmpresa = async (req: Request, res: Response) => {
    const empresa = await EmpresaSchema.findById(req.params.id, {productos: true});
    if (empresa) {
        res.send({status: true, message: 'Productos obtenidos con exito', productos: empresa.productos});
      }
      else
        res.send({status: false, message: 'Recomendaciones no encontradas'});
      res.end();
}

export const obtenerRecomendacionesUnaEmpresa = async (req: Request, res: Response) => {
    const empresa = await EmpresaSchema.findById(req.params.id, {recomendaciones: true});
    if (empresa) {
        res.send({status: true, message: 'Recomendaciones obtenidas con exito', recomendaciones: empresa.recomendaciones});
      }
      else
        res.send({status: false, message: 'Recomendaciones no encontradas'});
      res.end();
}

