import { Router } from "express";
import { check } from "express-validator";
import { getEventosAlumno } from "../../controllers/alumno/eventoAlumno";
import { postActividadAlumno } from '../../controllers/alumno/actividadAlumno';
import { validarCampos } from "../../middlewares";
import { verificacionEvento, verificacionUsuario } from '../../helpers';

const routerEventoAlumno = Router()

routerEventoAlumno.get('/:id', getEventosAlumno)

routerEventoAlumno.post('/',
     [
        check('apellidos', 'El apellidos es obligatorio').notEmpty(),
        check('nombres', 'El nombres es obligatorio').notEmpty(),
        check('actividad', 'La actividad es obligatorio').notEmpty(),
        check('inicio', 'El inicio es obligatorio').notEmpty(),
        check('final', 'El final es obligatorio').notEmpty(),
        validarCampos,
     ]
    , postActividadAlumno
    )

export default routerEventoAlumno