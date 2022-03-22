"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const user_1 = require("../controllers/user");
const middlewares_1 = require("../middlewares");
const routerUser = (0, express_1.Router)();
routerUser.get('/', user_1.getUser);
routerUser.get('/:id', user_1.getUserID);
routerUser.post('/', [
    (0, express_validator_1.check)('nombres', 'El nombre es obligatorio').notEmpty(),
    (0, express_validator_1.check)('apellidos', 'El apellidos es obligatorio').notEmpty(),
    (0, express_validator_1.check)('correo', 'El correo es obligatorio').notEmpty(),
    (0, express_validator_1.check)('correo', 'El correo no es valido').isEmail(),
    (0, express_validator_1.check)('password', 'El password es obligatorio').notEmpty(),
    (0, express_validator_1.check)('rol', 'El rol es obligatorio').notEmpty(),
    (0, express_validator_1.check)('rol', 'No es un rol valido').isIn(['ADMIN', 'DOCENTE', "ALUMNO"]),
    middlewares_1.validarCampos
], user_1.postUser);
routerUser.put('/:id', user_1.putUser);
routerUser.delete('/:id', user_1.deleteUser);
exports.default = routerUser;
//# sourceMappingURL=user.js.map