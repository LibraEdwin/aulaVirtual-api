"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const routerUsuario = (0, express_1.Router)();
routerUsuario.get('/', usuario_1.getUsuario);
routerUsuario.get('/:id', usuario_1.getUsuarioID);
routerUsuario.post('/', usuario_1.postUsuario);
routerUsuario.put('/:id', usuario_1.putUsuario);
routerUsuario.delete('/:id', usuario_1.deleteUsuario);
exports.default = routerUsuario;
//# sourceMappingURL=usuario.js.map