"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUser = exports.routerEvento = exports.routerCurso = exports.routerAula = exports.routerActividad = void 0;
const actividad_1 = __importDefault(require("./actividad"));
exports.routerActividad = actividad_1.default;
const aula_1 = __importDefault(require("./aula"));
exports.routerAula = aula_1.default;
const curso_1 = __importDefault(require("./curso"));
exports.routerCurso = curso_1.default;
const evento_1 = __importDefault(require("./evento"));
exports.routerEvento = evento_1.default;
const user_1 = __importDefault(require("./user"));
exports.routerUser = user_1.default;
//# sourceMappingURL=index.js.map