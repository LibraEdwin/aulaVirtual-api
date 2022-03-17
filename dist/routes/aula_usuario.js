"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aula_usuario_1 = require("../controllers/aula_usuario");
const routerAula_usuario = (0, express_1.Router)();
routerAula_usuario.get('/', aula_usuario_1.getAula_usuario);
routerAula_usuario.get('/:id', aula_usuario_1.getAula_usuarioID);
routerAula_usuario.post('/', aula_usuario_1.postAula_usuario);
routerAula_usuario.put('/:id', aula_usuario_1.putAula_usuario);
routerAula_usuario.delete('/:id', aula_usuario_1.deleteAula_usuario);
exports.default = routerAula_usuario;
//# sourceMappingURL=aula_usuario.js.map