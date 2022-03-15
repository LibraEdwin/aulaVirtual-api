"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aula_1 = require("../controllers/aula");
const routerAula = (0, express_1.Router)();
routerAula.get('/', aula_1.getAula);
routerAula.get('/:id', aula_1.getAulaID);
routerAula.post('/', aula_1.postAula);
routerAula.put('/:id', aula_1.putAula);
routerAula.delete('/:id', aula_1.deleteAula);
exports.default = routerAula;
//# sourceMappingURL=aula.js.map