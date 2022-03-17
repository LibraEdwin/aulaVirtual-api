import { Router } from "express";
import { getAula, getAulaID, postAula, putAula, deleteAula } from '../controllers/aula';

const routerAula = Router()

routerAula.get('/', getAula)

routerAula.get('/:id', getAulaID)

routerAula.post('/', postAula)

routerAula.put('/:id', putAula)

routerAula.delete('/:id', deleteAula)

export default routerAula