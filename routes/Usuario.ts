import { Router } from "express";
import { getUsuario, getUsuarioID, postUsuario, putUsuario, deleteUsuario } from '../controllers/Usuario';

const router = Router()

router.get('/', getUsuario)

router.get('/:id', getUsuarioID)

router.post('/', postUsuario)

router.put('/:id', putUsuario)

router.delete('/:id', deleteUsuario)

export default router