import express from 'express';
import { obtenerEmpresas, obtenerProductosUnaEmpresa, obtenerRecomendacionesUnaEmpresa } from '../controllers/empresa.controller';

const router = express.Router();

//Obtener todas las empresas
//http://localhost:3000/empresas
router.get('/', obtenerEmpresas)

//obtener los productos de una empresa
//http://localhost:3000/empresas/:id/productos
router.get('/:id/productos', obtenerProductosUnaEmpresa);

//obtener las recomendaciones de una empresa
//http://localhost:3000/empresas/:id/recomendaciones
router.get('/:id/recomendaciones', obtenerRecomendacionesUnaEmpresa);

export default router;