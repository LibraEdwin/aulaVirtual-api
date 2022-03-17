import { Router } from "express";
import { getClase, getClaseID, postClase, putClase, deleteClase } from '../controllers/clase';

const routerClase = Router()

routerClase.get('/', getClase)

routerClase.get('/:id', getClaseID)

routerClase.post('/', postClase)

routerClase.put('/:id', putClase)

routerClase.delete('/:id', deleteClase)

export default routerClase