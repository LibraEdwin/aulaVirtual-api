import { Router } from "express";
import { getAlumnos, getAula, getUsuariosAlumnoActivados, getUsuariosAlumnoDesactivado } from '../../controllers/admin/controllersGetAdmin';
import { postUsuarioAlumno } from "../../controllers/admin/controllersPostAdmin";
import { putUsuarioAlumno, putAsignarUsuarioAlumno, putUsuarioAlumnoDesactivado, putUsuarioAlumnoActivado } from '../../controllers/admin/controllersPutAdmin';
import { validarCampos } from "../../middlewares";
import { check } from "express-validator";

const routerAdmin = Router()

routerAdmin.get('/usuariosAlumnoActivados', getUsuariosAlumnoActivados)
routerAdmin.post('/usuariosAlumno', postUsuarioAlumno)
routerAdmin.put('/usuariosAlumno/:id', putUsuarioAlumno)
routerAdmin.put('/usuariosAlumnoDesactivar/:id', putUsuarioAlumnoDesactivado)

routerAdmin.get('/usuariosAlumnoDesactivados', getUsuariosAlumnoDesactivado)
routerAdmin.put('/usuariosAlumnoActivar/:id', putUsuarioAlumnoActivado)

routerAdmin.get('/Aula', getAula)

routerAdmin.put('/asignarAula/:id', putAsignarUsuarioAlumno)

routerAdmin.get('/alumnos', getAlumnos)



export default routerAdmin