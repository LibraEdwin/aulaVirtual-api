"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividad_1 = require("../controllers/actividad");
const router = (0, express_1.Router)();
router.get('/', actividad_1.getActividad);
router.get('/:id', actividad_1.getActividadID);
router.post('/', actividad_1.postActividad);
router.put('/:id', actividad_1.putActividad);
router.delete('/:id', actividad_1.deleteActividad);
exports.default = router;
//# sourceMappingURL=actividad.js.map