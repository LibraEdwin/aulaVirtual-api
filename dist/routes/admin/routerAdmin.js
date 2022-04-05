"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllersGetAdmin_1 = require("../../controllers/admin/controllersGetAdmin");
const controllersPostAdmin_1 = require("../../controllers/admin/controllersPostAdmin");
const controllersPutAdmin_1 = require("../../controllers/admin/controllersPutAdmin");
const controllersDeleteAdmin_1 = require("../../controllers/admin/controllersDeleteAdmin");
const routerAdmin = (0, express_1.Router)();
routerAdmin.get('/usuariosAlumno', controllersGetAdmin_1.getUsuariosAlumno);
routerAdmin.post('/usuariosAlumno', controllersPostAdmin_1.postUsuarioAlumno);
routerAdmin.put('/usuariosAlumno/:id', controllersPutAdmin_1.putUsuarioAlumno);
routerAdmin.delete('/usuariosAlumno/:id', controllersDeleteAdmin_1.deleteUsuarioAlumno);
routerAdmin.get('/alumnos', controllersGetAdmin_1.getAlumnos);
routerAdmin.get('/Aula', controllersGetAdmin_1.getAula);
exports.default = routerAdmin;
//# sourceMappingURL=routerAdmin.js.map