"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllersGetAdmin_1 = require("../../controllers/admin/controllersGetAdmin");
const controllersPostAdmin_1 = require("../../controllers/admin/controllersPostAdmin");
const controllersPutAdmin_1 = require("../../controllers/admin/controllersPutAdmin");
const routerAdmin = (0, express_1.Router)();
routerAdmin.get('/usuariosAlumnoActivados', controllersGetAdmin_1.getUsuariosAlumnoActivados);
routerAdmin.post('/usuariosAlumno', controllersPostAdmin_1.postUsuarioAlumno);
routerAdmin.put('/usuariosAlumno/:id', controllersPutAdmin_1.putUsuarioAlumno);
routerAdmin.put('/usuariosAlumnoDesactivar/:id', controllersPutAdmin_1.putUsuarioAlumnoDesactivado);
routerAdmin.get('/usuariosAlumnoDesactivados', controllersGetAdmin_1.getUsuariosAlumnoDesactivado);
routerAdmin.put('/usuariosAlumnoActivar/:id', controllersPutAdmin_1.putUsuarioAlumnoActivado);
routerAdmin.get('/Aula', controllersGetAdmin_1.getAula);
routerAdmin.put('/asignarAula/:id', controllersPutAdmin_1.putAsignarUsuarioAlumno);
routerAdmin.get('/alumnos', controllersGetAdmin_1.getAlumnos);
exports.default = routerAdmin;
//# sourceMappingURL=routerAdmin.js.map