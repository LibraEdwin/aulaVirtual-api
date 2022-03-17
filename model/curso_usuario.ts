import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Curso_usuarios = db.define('Curso_usuarios', {
    usuario_idusuarios: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    cursos_idcursos: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    }
},
    {
        timestamps: false
    }
)

export default Curso_usuarios 