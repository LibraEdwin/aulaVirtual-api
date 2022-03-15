import { Router } from "express";
import { getActividad, getActividadID, postActividad, putActividad, deleteActividad } from "../controllers/actividad"

const routerActividad = Router()

routerActividad.get('/', getActividad)

routerActividad.get('/:id', getActividadID)

routerActividad.post('/', postActividad)

routerActividad.put('/:id', putActividad)

routerActividad.delete('/:id', deleteActividad)

export default routerActividad