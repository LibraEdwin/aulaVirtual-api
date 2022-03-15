import { Router } from "express";
import { getUsuario, getUsuarioID, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuario';

const routerUsuario = Router()

routerUsuario.get('/', getUsuario)

routerUsuario.get('/:id', getUsuarioID)

routerUsuario.post('/', postUsuario)

routerUsuario.put('/:id', putUsuario)

routerUsuario.delete('/:id', deleteUsuario)

export default routerUsuario