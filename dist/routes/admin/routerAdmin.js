"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllersGetAdmin_1 = require("../../controllers/admin/controllersGetAdmin");
const routerAdmin = (0, express_1.Router)();
routerAdmin.get('/alumnos', controllersGetAdmin_1.getAlumnos);
routerAdmin.get('/Aula', controllersGetAdmin_1.getAula);
//routerAdmin.get('/:id', )
exports.default = routerAdmin;
//# sourceMappingURL=routerAdmin.js.map