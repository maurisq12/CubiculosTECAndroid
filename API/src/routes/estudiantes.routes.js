import {Router} from 'express'
import {getEstudiantes} from '../controllers/estudiantes.controller'

const routerE = Router();

routerE.get('/estudiantes', getEstudiantes)

routerE.get('/estudiantes', getEstudiantes)

routerE.put('/estudiantes', getEstudiantes)


export default routerE;