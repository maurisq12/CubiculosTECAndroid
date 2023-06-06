import {Router} from 'express'
import {getCubiculos, editarCubiculo, crearCubiculo,eliminarCubiculo} from '../controllers/cubiculos.controller'

const routerC = Router();

routerC.get('/cubiculos', getCubiculos)
routerC.post('/cubiculos/edit', editarCubiculo)
routerC.post('/cubiculos/new', crearCubiculo)
routerC.post('/cubiculos/delete', eliminarCubiculo)


export default routerC;