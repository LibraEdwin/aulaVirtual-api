"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAlumno = exports.routerUser = exports.routerEvento = exports.routerCurso = exports.routerCurso_usuario = exports.routerClase = exports.routerAula = exports.routerAula_usuario = exports.routerActividad = exports.routerAuth = void 0;
const auth_1 = __importDefault(require("./auth"));
exports.routerAuth = auth_1.default;
const actividad_1 = __importDefault(require("./actividad"));
exports.routerActividad = actividad_1.default;
const aula_usuario_1 = __importDefault(require("./aula_usuario"));
exports.routerAula_usuario = aula_usuario_1.default;
const aula_1 = __importDefault(require("./aula"));
exports.routerAula = aula_1.default;
const clase_1 = __importDefault(require("./clase"));
exports.routerClase = clase_1.default;
const curso_usuario_1 = __importDefault(require("./curso_usuario"));
exports.routerCurso_usuario = curso_usuario_1.default;
const curso_1 = __importDefault(require("./curso"));
exports.routerCurso = curso_1.default;
const evento_1 = __importDefault(require("./evento"));
exports.routerEvento = evento_1.default;
const user_1 = __importDefault(require("./user"));
exports.routerUser = user_1.default;
const routerAlumno_1 = __importDefault(require("./alumno/routerAlumno"));
exports.routerAlumno = routerAlumno_1.default;
//# sourceMappingURL=index.js.map