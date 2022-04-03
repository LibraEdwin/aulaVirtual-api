import { Router } from "express";
import { check } from "express-validator";
import { getAlumnos, getAula } from '../../controllers/admin/controllersGetAdmin';
import { validarCampos } from "../../middlewares";

const routerAdmin = Router()

routerAdmin.get('/alumnos', getAlumnos)

routerAdmin.get('/Aula', getAula)

//routerAdmin.get('/:id', )


export default routerAdmin