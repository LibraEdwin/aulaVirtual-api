import { Router } from "express";
import { getUser, getUserID, postUser, putUser, deleteUser } from '../controllers/user';

const routerUser = Router()

routerUser.get('/', getUser)

routerUser.get('/:id', getUserID)

routerUser.post('/', postUser)

routerUser.put('/:id', putUser)

routerUser.delete('/:id', deleteUser)

export default routerUser