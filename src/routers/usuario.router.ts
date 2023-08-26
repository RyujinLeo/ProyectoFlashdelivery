import express from 'express';
import { login, obtenerPedidosUsuario } from '../controllers/usuario.controller';

const router = express.Router();

//Verificación usuario/cliente
//http://localhost:3000/usuarios/login
router.post('/login', login);

//Obtener pedidos del usuario
//http://localhost:3000/usuarios/:id/pedidos
router.get('/:id/pedidos', obtenerPedidosUsuario);


export default router;