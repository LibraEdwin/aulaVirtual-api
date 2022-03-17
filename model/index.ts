import Actividad from "./actividad";
import Aula_usuario from './aula_usuario'
import Aula from "./aula";
import Curso_usuario from './curso_usuario'
import Curso from "./curso";
import Evento from "./evento";
import Usuario from './usuario';

//Relacion de actividad con usuario
Actividad.belongsTo(Usuario,{foreignKey: 'usuario_idusuarios'})
Usuario.hasMany(Actividad,{foreignKey: 'usuario_idusuarios'})

//Relacion de evento con usuario
Evento.belongsTo(Usuario,{foreignKey: 'usuario_idusuarios'})
Usuario.hasMany(Evento,{foreignKey: 'usuario_idusuarios'})

//relacion de muchos a muchos


export {
    Actividad,
    Aula_usuario,
    Aula,
    Curso_usuario,
    Curso,
    Evento,
    Usuario
}