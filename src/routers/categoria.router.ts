import express from 'express';
import { obtenerCategorias } from '../controllers/Categoria.controller';


const router = express.Router();

//Obtener las Categorias de la pagina proincipal del cliente
//http://localhost:3000/categorias
router.get('/', obtenerCategorias)

export default router;