"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuario_1 = require("../controllers/Usuario");
const router = (0, express_1.Router)();
router.get('/', Usuario_1.getUsuario);
router.get('/:id', Usuario_1.getUsuarioID);
router.post('/', Usuario_1.postUsuario);
router.put('/:id', Usuario_1.putUsuario);
router.delete('/:id', Usuario_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=Usuario.js.map