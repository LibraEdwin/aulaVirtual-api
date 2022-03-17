"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clase_1 = require("../controllers/clase");
const routerClase = (0, express_1.Router)();
routerClase.get('/', clase_1.getClase);
routerClase.get('/:id', clase_1.getClaseID);
routerClase.post('/', clase_1.postClase);
routerClase.put('/:id', clase_1.putClase);
routerClase.delete('/:id', clase_1.deleteClase);
exports.default = routerClase;
//# sourceMappingURL=clase.js.map