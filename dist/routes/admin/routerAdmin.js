"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_Docente_1 = require("../../controllers/admin/controllers.Docente");
const routerAdmin = (0, express_1.Router)();
routerAdmin.get('/', controllers_Docente_1.getAlumnoAula);
//routerAdmin.get('/:id', )
exports.default = routerAdmin;
//# sourceMappingURL=routerAdmin.js.map