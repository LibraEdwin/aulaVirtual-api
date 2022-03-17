"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const curso_usuario_1 = require("../controllers/curso_usuario");
const routerCurso_usuario = (0, express_1.Router)();
routerCurso_usuario.get('/', curso_usuario_1.getCurso_usuario);
routerCurso_usuario.get('/:id', curso_usuario_1.getCurso_usuarioID);
routerCurso_usuario.post('/', curso_usuario_1.postCurso_usuario);
routerCurso_usuario.put('/:id', curso_usuario_1.putCurso_usuario);
routerCurso_usuario.delete('/:id', curso_usuario_1.deleteCurso_usuario);
exports.default = routerCurso_usuario;
//# sourceMappingURL=curso_usuario.js.map