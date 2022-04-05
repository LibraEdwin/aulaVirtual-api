"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = exports.Evento = exports.Curso = exports.Docente = exports.Clase = exports.Aula = exports.Alumno = exports.Actividad = void 0;
const actividad_1 = __importDefault(require("./actividad"));
exports.Actividad = actividad_1.default;
const alumno_1 = __importDefault(require("./alumno"));
exports.Alumno = alumno_1.default;
const aula_1 = __importDefault(require("./aula"));
exports.Aula = aula_1.default;
const clase_1 = __importDefault(require("./clase"));
exports.Clase = clase_1.default;
const docente_1 = __importDefault(require("./docente"));
exports.Docente = docente_1.default;
const curso_1 = __importDefault(require("./curso"));
exports.Curso = curso_1.default;
const evento_1 = __importDefault(require("./evento"));
exports.Evento = evento_1.default;
const usuario_1 = __importDefault(require("./usuario"));
exports.Usuario = usuario_1.default;
//Relacion de Actividad con Alumno
actividad_1.default.belongsTo(alumno_1.default, { foreignKey: 'alumnos_idalumnos' });
alumno_1.default.hasMany(actividad_1.default, { foreignKey: 'alumnos_idalumnos' });
//----------------------------------------------------------------------------
//Relacion de Evento con Docente
evento_1.default.belongsTo(docente_1.default, { foreignKey: 'docentes_iddocentes' });
docente_1.default.hasMany(evento_1.default, { foreignKey: 'docentes_iddocentes' });
//----------------------------------------------------------------------------
//Relacion de Evento con clase
evento_1.default.belongsTo(clase_1.default, { foreignKey: 'clases_idclases' });
clase_1.default.hasMany(evento_1.default, { foreignKey: 'clases_idclases' });
//----------------------------------------------------------------------------
//Relacion de evento con actividad
actividad_1.default.belongsTo(evento_1.default, { foreignKey: 'eventos_ideventos' });
evento_1.default.hasMany(actividad_1.default, { foreignKey: 'eventos_ideventos' });
//----------------------------------------------------------------------------
//relacion de muchos a muchos de cursos_usuarios
docente_1.default.belongsTo(usuario_1.default, { foreignKey: 'usuarios_idusuarios' });
usuario_1.default.hasMany(docente_1.default, { foreignKey: 'usuarios_idusuarios' });
docente_1.default.belongsTo(curso_1.default, { foreignKey: 'cursos_idcursos' });
curso_1.default.hasMany(docente_1.default, { foreignKey: 'cursos_idcursos' });
//----------------------------------------------------------------------------
//relacion de muchos a muchos de aula_usuarios
alumno_1.default.belongsTo(usuario_1.default, { foreignKey: 'usuarios_idusuarios' });
usuario_1.default.hasMany(alumno_1.default, { foreignKey: 'usuarios_idusuarios' });
alumno_1.default.belongsTo(aula_1.default, { foreignKey: 'aulas_idaulas' });
aula_1.default.hasMany(alumno_1.default, { foreignKey: 'aulas_idaulas' });
//----------------------------------------------------------------------------
//relacion de muchos a muchos de clase
clase_1.default.belongsTo(aula_1.default, { foreignKey: 'aulas_idaulas' });
aula_1.default.hasMany(clase_1.default, { foreignKey: 'aulas_idaulas' });
clase_1.default.belongsTo(curso_1.default, { foreignKey: 'cursos_idcursos' });
curso_1.default.hasMany(clase_1.default, { foreignKey: 'cursos_idcursos' });
//# sourceMappingURL=index.js.map