// import { Router } from "express";
// import { check } from "express-validator";
// import { getEventosAlumno } from "../../controllers/alumno/eventoAlumno";
// import { postActividadAlumno } from '../../controllers/alumno/actividadAlumno';
// import { validarCampos } from "../../middlewares";

// const routerDocente = Router()

// routerDocente.get('/:id', getEventosAlumno)

// routerDocente.post('/',
//    [
//       check('apellidos', 'El apellidos es obligatorio').notEmpty(),
//       check('nombres', 'El nombres es obligatorio').notEmpty(),
//       check('actividad', 'La actividad es obligatorio').notEmpty(),
//       check('inicio', 'El inicio es obligatorio').notEmpty(),
//       check('final', 'El final es obligatorio').notEmpty(),
//       validarCampos,
//    ]
//    , postActividadAlumno
// )

// export default routerDocente