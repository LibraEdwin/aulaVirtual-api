import { Router } from "express";
import { getActividad, getActividadID, postActividad, putActividad, deleteActividad } from "../controllers/actividad"

const router = Router()

router.get('/', getActividad)

router.get('/:id', getActividadID)

router.post('/', postActividad)

router.put('/:id', putActividad)

router.delete('/:id', deleteActividad)

export default router