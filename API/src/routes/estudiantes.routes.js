import {Router} from 'express'
import {getEstudiantes,editarEstudiante,eliminarEstudiante} from '../controllers/estudiantes.controller'

const routerE = Router();

routerE.get('/estudiantes', getEstudiantes)

routerE.post('/estudiantes/edit', editarEstudiante)

routerE.post('/estudiantes/delete', eliminarEstudiante)


export default routerE;