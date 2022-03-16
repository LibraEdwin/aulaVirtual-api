import Actividad from "./actividad";
import Aula from "./aula";
import Curso from "./curso";
import Evento from "./evento";
import Usuario from './usuario';

Actividad.belongsTo(Usuario,{foreignKey: 'usuario_idusuario'})

export {
    Actividad,
    Aula,
    Curso,
    Evento,
    Usuario
}