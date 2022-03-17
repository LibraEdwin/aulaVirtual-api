"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = exports.Evento = exports.Curso = exports.Curso_usuario = exports.Aula = exports.Aula_usuario = exports.Actividad = void 0;
const actividad_1 = __importDefault(require("./actividad"));
exports.Actividad = actividad_1.default;
const aula_usuario_1 = __importDefault(require("./aula_usuario"));
exports.Aula_usuario = aula_usuario_1.default;
const aula_1 = __importDefault(require("./aula"));
exports.Aula = aula_1.default;
const curso_usuario_1 = __importDefault(require("./curso_usuario"));
exports.Curso_usuario = curso_usuario_1.default;
const curso_1 = __importDefault(require("./curso"));
exports.Curso = curso_1.default;
const evento_1 = __importDefault(require("./evento"));
exports.Evento = evento_1.default;
const usuario_1 = __importDefault(require("./usuario"));
exports.Usuario = usuario_1.default;
//Relacion de actividad con usuario
actividad_1.default.belongsTo(usuario_1.default, { foreignKey: 'usuario_idusuarios' });
usuario_1.default.hasMany(actividad_1.default, { foreignKey: 'usuario_idusuarios' });
//Relacion de evento con usuario
evento_1.default.belongsTo(usuario_1.default, { foreignKey: 'usuario_idusuarios' });
usuario_1.default.hasMany(evento_1.default, { foreignKey: 'usuario_idusuarios' });
//# sourceMappingURL=index.js.map