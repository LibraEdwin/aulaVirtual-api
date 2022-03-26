"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventoAlumno_1 = require("../../controllers/alumno/eventoAlumno");
const routerEventoAlumno = (0, express_1.Router)();
routerEventoAlumno.get('/:id', eventoAlumno_1.getEventos);
exports.default = routerEventoAlumno;
//# sourceMappingURL=routerEventoAlumno.js.map