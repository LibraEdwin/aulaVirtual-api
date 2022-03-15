"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const curso_1 = require("../controllers/curso");
const routerCurso = (0, express_1.Router)();
routerCurso.get('/', curso_1.getCurso);
routerCurso.get('/:id', curso_1.getCursoID);
routerCurso.post('/', curso_1.postCurso);
routerCurso.put('/:id', curso_1.putCurso);
routerCurso.delete('/:id', curso_1.deleteCurso);
exports.default = routerCurso;
//# sourceMappingURL=curso.js.map