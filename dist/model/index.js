"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = exports.Evento = exports.Curso = exports.Curso_usuario = exports.Clase = exports.Aula = exports.Aula_usuario = exports.Actividad = void 0;
const actividad_1 = __importDefault(require("./actividad"));
exports.Actividad = actividad_1.default;
const aula_usuario_1 = __importDefault(require("./aula_usuario"));
exports.Aula_usuario = aula_usuario_1.default;
const aula_1 = __importDefault(require("./aula"));
exports.Aula = aula_1.default;
const clase_1 = __importDefault(require("./clase"));
exports.Clase = clase_1.default;
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
//----------------------------------------------------------------------------
//Relacion de evento con usuario
evento_1.default.belongsTo(usuario_1.default, { foreignKey: 'usuario_idusuarios' });
usuario_1.default.hasMany(evento_1.default, { foreignKey: 'usuario_idusuarios' });
//----------------------------------------------------------------------------
//Relacion de evento con clase
evento_1.default.belongsTo(clase_1.default, { foreignKey: 'clases_idclases' });
clase_1.default.hasMany(evento_1.default, { foreignKey: 'clases_idclases' });
//----------------------------------------------------------------------------
//Relacion de evento con actividad
actividad_1.default.belongsTo(evento_1.default, { foreignKey: 'eventos_ideventos' });
evento_1.default.hasMany(actividad_1.default, { foreignKey: 'eventos_ideventos' });
//----------------------------------------------------------------------------
//relacion de muchos a muchos de cursos_usuarios
curso_usuario_1.default.belongsTo(usuario_1.default, { foreignKey: 'usuario_idusuarios' });
usuario_1.default.hasMany(curso_usuario_1.default, { foreignKey: 'usuario_idusuarios' });
curso_usuario_1.default.belongsTo(curso_1.default, { foreignKey: 'cursos_idcursos' });
curso_1.default.hasMany(curso_usuario_1.default, { foreignKey: 'cursos_idcursos' });
//----------------------------------------------------------------------------
//relacion de muchos a muchos de aula_usuarios
aula_usuario_1.default.belongsTo(usuario_1.default, { foreignKey: 'usuario_idusuarios' });
usuario_1.default.hasMany(aula_usuario_1.default, { foreignKey: 'usuario_idusuarios' });
aula_usuario_1.default.belongsTo(aula_1.default, { foreignKey: 'aulas_idaulas' });
aula_1.default.hasMany(aula_usuario_1.default, { foreignKey: 'aulas_idaulas' });
//----------------------------------------------------------------------------
//relacion de muchos a muchos de clase
clase_1.default.belongsTo(aula_1.default, { foreignKey: 'aulas_idaulas' });
aula_1.default.hasMany(clase_1.default, { foreignKey: 'aulas_idaulas' });
clase_1.default.belongsTo(curso_1.default, { foreignKey: 'cursos_idcursos' });
curso_1.default.hasMany(clase_1.default, { foreignKey: 'cursos_idcursos' });
//# sourceMappingURL=index.js.map