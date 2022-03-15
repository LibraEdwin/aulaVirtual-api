"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividad_1 = require("../controllers/actividad");
const routerActividad = (0, express_1.Router)();
routerActividad.get('/', actividad_1.getActividad);
routerActividad.get('/:id', actividad_1.getActividadID);
routerActividad.post('/', actividad_1.postActividad);
routerActividad.put('/:id', actividad_1.putActividad);
routerActividad.delete('/:id', actividad_1.deleteActividad);
exports.default = routerActividad;
//# sourceMappingURL=actividad.js.map