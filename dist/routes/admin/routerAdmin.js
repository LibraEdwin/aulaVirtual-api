"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllersAdmin_1 = require("../../controllers/admin/controllersAdmin");
const routerAdmin = (0, express_1.Router)();
routerAdmin.get('/', controllersAdmin_1.getAlumnoAula);
//routerAdmin.get('/:id', )
exports.default = routerAdmin;
//# sourceMappingURL=routerAdmin.js.map