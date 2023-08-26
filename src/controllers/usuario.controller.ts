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

export const obtenerPedidosUsuario = async (req: Request, res:Response) => {
  const usuario = await UsuarioSchema.findById(req.params.id, {pedidos: true});
  if (usuario) {
    res.send({status: true, message: 'Pedidos obtenidos con exito', pedidos: usuario.pedidos});
  }
  else
    res.send({status: false, message: 'Usuario no existe'});
  res.end();
}