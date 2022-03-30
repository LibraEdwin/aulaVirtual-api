import { Router } from "express";
import { check } from "express-validator";
import { getAlumnoAula } from "../../controllers/admin/controllers.Docente";
import { validarCampos } from "../../middlewares";

const routerAdmin = Router()

routerAdmin.get('/', getAlumnoAula)

//routerAdmin.get('/:id', )


export default routerAdmin