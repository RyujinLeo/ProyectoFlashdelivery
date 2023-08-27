import express from 'express';
import { loginMotorista, obtenerDetalleMotorista, obtenerMotoristas, obtenerMotoristasDisponibles, obtenerOrdenesMotorista, registrarMotorista } from '../controllers/motorista.controller';

const router = express.Router();

//Verificacion de un motorista
//http://localhost:3000/motoristas/login
router.post('/login-motorista', loginMotorista);

//Obtener los detalles de un motorista
//http://localhost:3000/motoristas/:id
router.get('/:id', obtenerDetalleMotorista);

//Obtener todos los motorista
//http://localhost:3000/motoristas
router.get('/', obtenerMotoristas);

//obtener ordenes de un motorista
//http://localhost:3000/motoristas/:id/ordenes
router.get('/:id/ordenes', obtenerOrdenesMotorista);

//Obtener motoristas disponibles
//http://localhost:3000/motoristas/disponibles
router.get('/:estado-disponible', obtenerMotoristasDisponibles);

//Registrar un nuevo motorista
router.post('/', registrarMotorista);


export default router;