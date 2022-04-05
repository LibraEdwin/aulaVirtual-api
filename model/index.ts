import Actividad from "./actividad";
import Alumno from './alumno'
import Aula from "./aula";
import Clase from './clase';
import Docente from './docente'
import Curso from "./curso";
import Evento from "./evento";
import Usuario from './usuario';

//Relacion de Actividad con Alumno
Actividad.belongsTo(Alumno,{foreignKey: 'alumnos_idalumnos'})
Alumno.hasMany(Actividad,{foreignKey: 'alumnos_idalumnos'})
//----------------------------------------------------------------------------

//Relacion de Evento con Docente
Evento.belongsTo(Docente,{foreignKey: 'docentes_iddocentes'})
Docente.hasMany(Evento,{foreignKey: 'docentes_iddocentes'})
//----------------------------------------------------------------------------

//Relacion de Evento con clase
Evento.belongsTo(Clase,{foreignKey: 'clases_idclases'})
Clase.hasMany(Evento,{foreignKey: 'clases_idclases'})
//----------------------------------------------------------------------------

//Relacion de evento con actividad
Actividad.belongsTo(Evento,{foreignKey: 'eventos_ideventos'})
Evento.hasMany(Actividad,{foreignKey: 'eventos_ideventos'})
//----------------------------------------------------------------------------

//relacion de muchos a muchos de cursos_usuarios
Docente.belongsTo(Usuario,{foreignKey: 'usuarios_idusuarios'})
Usuario.hasMany(Docente,{foreignKey: 'usuarios_idusuarios'})

Docente.belongsTo(Curso,{foreignKey: 'cursos_idcursos'})
Curso.hasMany(Docente,{foreignKey: 'cursos_idcursos'})
//----------------------------------------------------------------------------

//relacion de muchos a muchos de aula_usuarios
Alumno.belongsTo(Usuario,{foreignKey: 'usuarios_idusuarios'})
Usuario.hasMany(Alumno,{foreignKey: 'usuarios_idusuarios'})

Alumno.belongsTo(Aula,{foreignKey: 'aulas_idaulas'})
Aula.hasMany(Alumno,{foreignKey: 'aulas_idaulas'})
//----------------------------------------------------------------------------

//relacion de muchos a muchos de clase
Clase.belongsTo(Aula,{foreignKey: 'aulas_idaulas'})
Aula.hasMany(Clase,{foreignKey: 'aulas_idaulas'})

Clase.belongsTo(Curso,{foreignKey: 'cursos_idcursos'})
Curso.hasMany(Clase,{foreignKey: 'cursos_idcursos'})
//----------------------------------------------------------------------------

export {
    Actividad,
    Alumno,
    Aula,
    Clase,
    Docente,
    Curso,
    Evento,
    Usuario
}