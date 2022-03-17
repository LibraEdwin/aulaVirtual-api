import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Evento = db.define('Evento', {
    ideventos: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    evento: {
        type: DataTypes.STRING
    },
    comentario: {
        type: DataTypes.STRING
    },
    archivo: {
        type: DataTypes.STRING
    },
    usuario_idusuarios: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
})

export default Evento