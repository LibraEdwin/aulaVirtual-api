import { Router } from "express";
import { check } from "express-validator";
import { getUser, getUserID, postUser, putUser, deleteUser } from '../controllers/user';
import { existeID, existeEmail } from "../helpers";
import { validarCampos } from "../middlewares";

const routerUser = Router()

routerUser.get('/', getUser)

routerUser.get('/:id', getUserID)

routerUser.post('/', [
    check('nombres', 'El nombre es obligatorio').notEmpty(),
    check('apellidos', 'El apellidos es obligatorio').notEmpty(),
    check('correo', 'El correo es obligatorio').notEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(existeEmail),
    check('contraseña', 'El password es obligatorio').notEmpty(),
    check('rol', 'El rol es obligatorio').notEmpty(),
    check('rol', 'No es un rol valido').isIn(['ADMIN', 'DOCENTE', "ALUMNO"]),
    validarCampos,
], postUser)

routerUser.put('/:id', [
    check('id').custom(existeID),
    check('nombres', 'El nombre es obligatorio').notEmpty(),
    check('apellidos', 'El apellidos es obligatorio').notEmpty(),
    check('contraseña', 'El password es obligatorio').notEmpty(),
    validarCampos,
], putUser)

routerUser.delete('/:id', deleteUser)

export default routerUser