import { Router } from "express";
import { check } from "express-validator";
import { login } from '../controllers/auth';
import { validarCampos } from '../middlewares';

const routerAuth = Router()

routerAuth.post('/',[
    check('correo', 'El correo no es valido').isEmail(),
    check('correo','El correo es obligatorio').notEmpty(),
    check('contraseña','La contraseña es obligatoria').notEmpty(),
    validarCampos
] , login)

export default routerAuth