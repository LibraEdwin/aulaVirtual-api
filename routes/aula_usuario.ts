import { Router } from "express";
import { getAula_usuario, getAula_usuarioID, postAula_usuario, putAula_usuario, deleteAula_usuario } from '../controllers/aula_usuario';

const routerAula_usuario = Router()

routerAula_usuario.get('/', getAula_usuario)

routerAula_usuario.get('/:id', getAula_usuarioID)

routerAula_usuario.post('/', postAula_usuario)

routerAula_usuario.put('/:id', putAula_usuario)

routerAula_usuario.delete('/:id', deleteAula_usuario)

export default routerAula_usuario