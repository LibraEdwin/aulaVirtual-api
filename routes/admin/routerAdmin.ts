import { Router } from "express";
import { check } from "express-validator";
import { getAlumnos, getAula, getUsuariosAlumno } from '../../controllers/admin/controllersGetAdmin';
import { postUsuarioAlumno } from "../../controllers/admin/controllersPostAdmin";
import { putUsuarioAlumno, putAsignarUsuarioAlumno } from '../../controllers/admin/controllersPutAdmin';
import { validarCampos } from "../../middlewares";
import { deleteUsuarioAlumno } from '../../controllers/admin/controllersDeleteAdmin';

const routerAdmin = Router()

routerAdmin.get('/usuariosAlumno', getUsuariosAlumno)
routerAdmin.post('/usuariosAlumno', postUsuarioAlumno)
routerAdmin.put('/usuariosAlumno/:id', putUsuarioAlumno)
routerAdmin.delete('/usuariosAlumno/:id', deleteUsuarioAlumno)

routerAdmin.get('/Aula', getAula)

routerAdmin.put('/asignarAula/:id', putAsignarUsuarioAlumno)

routerAdmin.get('/alumnos', getAlumnos)



export default routerAdmin