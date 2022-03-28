import Actividad from "./actividad";
import Aula_usuario from './aula_usuario'
import Aula from "./aula";
import Clase from './clase';
import Curso_usuario from './curso_usuario'
import Curso from "./curso";
import Evento from "./evento";
import Usuario from './usuario';

//Relacion de actividad con usuario
Actividad.belongsTo(Usuario,{foreignKey: 'usuario_idusuarios'})
Usuario.hasMany(Actividad,{foreignKey: 'usuario_idusuarios'})
//----------------------------------------------------------------------------

//Relacion de evento con usuario
Evento.belongsTo(Usuario,{foreignKey: 'usuario_idusuarios'})
Usuario.hasMany(Evento,{foreignKey: 'usuario_idusuarios'})
//----------------------------------------------------------------------------

//Relacion de evento con clase
Evento.belongsTo(Clase,{foreignKey: 'clases_idclases'})
Clase.hasMany(Evento,{foreignKey: 'clases_idclases'})
//----------------------------------------------------------------------------

//Relacion de evento con actividad
Actividad.belongsTo(Evento,{foreignKey: 'eventos_ideventos'})
Evento.hasMany(Actividad,{foreignKey: 'eventos_ideventos'})
//----------------------------------------------------------------------------

//relacion de muchos a muchos de cursos_usuarios
Curso_usuario.belongsTo(Usuario,{foreignKey: 'usuario_idusuarios'})
Usuario.hasMany(Curso_usuario,{foreignKey: 'usuario_idusuarios'})

Curso_usuario.belongsTo(Curso,{foreignKey: 'cursos_idcursos'})
Curso.hasMany(Curso_usuario,{foreignKey: 'cursos_idcursos'})
//----------------------------------------------------------------------------

//relacion de muchos a muchos de aula_usuarios
Aula_usuario.belongsTo(Usuario,{foreignKey: 'usuario_idusuarios'})
Usuario.hasMany(Aula_usuario,{foreignKey: 'usuario_idusuarios'})

Aula_usuario.belongsTo(Aula,{foreignKey: 'aulas_idaulas'})
Aula.hasMany(Aula_usuario,{foreignKey: 'aulas_idaulas'})
//----------------------------------------------------------------------------

//relacion de muchos a muchos de clase
Clase.belongsTo(Aula,{foreignKey: 'aulas_idaulas'})
Aula.hasMany(Clase,{foreignKey: 'aulas_idaulas'})

Clase.belongsTo(Curso,{foreignKey: 'cursos_idcursos'})
Curso.hasMany(Clase,{foreignKey: 'cursos_idcursos'})
//----------------------------------------------------------------------------

export {
    Actividad,
    Aula_usuario,
    Aula,
    Clase,
    Curso_usuario,
    Curso,
    Evento,
    Usuario
}