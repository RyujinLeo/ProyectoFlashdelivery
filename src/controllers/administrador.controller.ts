import {Request, Response} from 'express';
import { AdministradorSchema } from '../models/administrador.schema';

export const loginAdministrador = async (req: Request, res: Response) => {
    const administrador = await AdministradorSchema.findOne({correo: req.body.correo, contrasena: req.body.contrasena});
    if (administrador) {
      res.send({status: true, message: 'Login correcto', administrador});
    }
    else 
      res.send({status: false, message: 'Login incorrecto'});
    res.end();
}

export const obtenerAdministradores = async (req: Request, res: Response) => {
    const administrador = await AdministradorSchema.find().limit(2);
    if (administrador) {
      res.send({status: true, message: 'Administradores obtenidos con exito', administrador});
    }
    else 
      res.send({status: false, message: 'Administradores no encontrados'});
    res.end();
}