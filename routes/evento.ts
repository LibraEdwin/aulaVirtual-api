import { Router } from "express";
import { getEvento, getEventoID, postEvento, putEvento, deleteEvento } from '../controllers/evento';

const routerEvento = Router()

routerEvento.get('/', getEvento)

routerEvento.get('/:id', getEventoID)

routerEvento.post('/', postEvento)

routerEvento.put('/:id', putEvento)

routerEvento.delete('/:id', deleteEvento)

export default routerEvento