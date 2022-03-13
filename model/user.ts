import { DataTypes } from 'sequelize'
import db from '../db/connection'

const User = db.define('User', {
    correo: {
        type: DataTypes.STRING
    },
    contraseña: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
})

export default User