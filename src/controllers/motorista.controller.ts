import {Request, Response } from 'express';
import { MotoristaSchema } from '../models/motorista.schema';

export const loginMotorista = async (req: Request, res: Response) => {

    
    const motorista = await MotoristaSchema.findOne({correo: req.body.correo, contrasena: req.body.contrasena});
    if (motorista) {
      res.send({status: true, message: 'Login correcto', motorista});
    }
    else 
      res.send({status: false, message: 'Login incorrecto'});
    res.end();
}

export const obtenerOrdenesMotorista = async (req: Request, res: Response) => {

    const motorista = await MotoristaSchema.findById(req.params.id, {ordenes: true});
    if (motorista) {
        res.send({status: true, message:'Ordenes obtenidas con exito', ordenes: motorista.ordenes});
    }
    else
        res.send({status: false, message:'Ordenes no encontradas'});
    res.end();
}

export const obtenerDetalleMotorista = async (req: Request, res: Response) => {

    const motorista = await MotoristaSchema.findById(req.params.id);
    if (motorista) {
        res.send({status: true, message:'Detalles motorista obtenidas con exito', motorista});
    }
    else
        res.send({status: false, message:'Detalles motorista no encontradas'});
    res.end();

}

export const obtenerMotoristas = async (req: Request, res: Response) => {

    const motorista = await MotoristaSchema.find().limit(2);
    if (motorista) {
        res.send({status: true, message:'Motoristas obtenidos con exito', motorista});
    }
    else
        res.send({status: false, message:'Motoristas no encontrados'});
    res.end();

}

export const obtenerMotoristasDisponibles = async (req: Request, res: Response) => {

    const motorista = await MotoristaSchema.find({disponible: true}).limit(2);
    if (motorista) {
        res.send({status: true, message:'Motoristas disponibles obtenidos con exito', motorista});
    }
    else
        res.send({status: false, message:'Motoristas disponibles no encontrados'});
    res.end();
}

