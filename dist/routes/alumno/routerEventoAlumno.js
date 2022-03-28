"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const eventoAlumno_1 = require("../../controllers/alumno/eventoAlumno");
const actividadAlumno_1 = require("../../controllers/alumno/actividadAlumno");
const middlewares_1 = require("../../middlewares");
const routerEventoAlumno = (0, express_1.Router)();
routerEventoAlumno.get('/:id', eventoAlumno_1.getEventosAlumno);
routerEventoAlumno.post('/', [
    (0, express_validator_1.check)('apellidos', 'El apellidos es obligatorio').notEmpty(),
    (0, express_validator_1.check)('nombres', 'El nombres es obligatorio').notEmpty(),
    (0, express_validator_1.check)('actividad', 'La actividad es obligatorio').notEmpty(),
    (0, express_validator_1.check)('inicio', 'El inicio es obligatorio').notEmpty(),
    (0, express_validator_1.check)('final', 'El final es obligatorio').notEmpty(),
    middlewares_1.validarCampos,
], actividadAlumno_1.postActividadAlumno);
exports.default = routerEventoAlumno;
//# sourceMappingURL=routerEventoAlumno.js.map