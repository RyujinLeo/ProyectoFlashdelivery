import {Request, Response} from 'express';
import { UsuarioSchema } from '../models/usuario.schema';


export const login = async (req: Request, res: Response) => {

    
    const usuario = await UsuarioSchema.findOne({correo: req.body.correo, contrasena: req.body.contrasena});
    if (usuario) {
      res.send({status: true, message: 'Login correcto', usuario});
    }
    else 
      res.send({status: false, message: 'Login incorrecto'});
    res.end();
  }