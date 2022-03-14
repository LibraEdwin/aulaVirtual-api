import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Actividad = db.define('Actividad', {
    idactividad: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    actividad: {
        type: DataTypes.STRING
    },
    comentario: {
        type: DataTypes.STRING
    },
    nota: {
        type: DataTypes.INTEGER
    },
    usuario_idusuario: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
})

export default Actividad