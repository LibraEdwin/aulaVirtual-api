import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Usuario = db.define('Usuario', {
    idusuarios: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    contraseña: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.BOOLEAN
    },
    rol: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
})

export default Usuario