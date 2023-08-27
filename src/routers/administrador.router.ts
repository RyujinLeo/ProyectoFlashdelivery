import express from 'express';
import { loginAdministrador, obtenerAdministradores } from '../controllers/administrador.controller';

const router = express.Router();

//login administrador
//http://localhost:3000/administradores/login-administrador
router.post('/login-administrador', loginAdministrador);

//Obtener todos los administradores
//http://localhost:3000/administradores
router.get('/', obtenerAdministradores);


export default router;