import {Router} from 'express'
import {getCubiculos, editarCubiculo, crearCubiculo} from '../controllers/cubiculos.controller'

const routerC = Router();

routerC.get('/cubiculos', getCubiculos)
routerC.post('/cubiculos/edit', editarCubiculo)
routerC.post('/cubiculos/new', crearCubiculo)


export default routerC;