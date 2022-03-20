import { Router } from "express";
import { check } from "express-validator";
import { getUser, getUserID, postUser, putUser, deleteUser } from '../controllers/user';

const routerUser = Router()

routerUser.get('/', getUser)

routerUser.get('/:id', getUserID)

routerUser.post('/', [
    check('correo', 'El correo no es valido').isEmail()
], postUser)

routerUser.put('/:id', putUser)

routerUser.delete('/:id', deleteUser)

export default routerUser