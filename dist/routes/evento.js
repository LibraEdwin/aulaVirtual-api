"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evento_1 = require("../controllers/evento");
const routerEvento = (0, express_1.Router)();
routerEvento.get('/', evento_1.getEvento);
routerEvento.get('/:id', evento_1.getEventoID);
routerEvento.post('/', evento_1.postEvento);
routerEvento.put('/:id', evento_1.putEvento);
routerEvento.delete('/:id', evento_1.deleteEvento);
exports.default = routerEvento;
//# sourceMappingURL=evento.js.map