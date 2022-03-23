"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../controllers/auth");
const middlewares_1 = require("../middlewares");
const routerAuth = (0, express_1.Router)();
routerAuth.post('/', [
    (0, express_validator_1.check)('correo', 'El correo no es valido').isEmail(),
    (0, express_validator_1.check)('correo', 'El correo es obligatorio').notEmpty(),
    (0, express_validator_1.check)('contraseña', 'La contraseña es obligatoria').notEmpty(),
    middlewares_1.validarCampos
], auth_1.login);
exports.default = routerAuth;
//# sourceMappingURL=auth.js.map