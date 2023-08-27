import express from 'express';
import { obtenerProductos } from '../controllers/producto.controller';

const router = express.Router();

//Obtener todos los productos
//http://loclahost:3000/productos
router.get('/', obtenerProductos);

export default router;