import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Evento = db.define('Evento',
    {
        ideventos: {
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
        archivo: {
            type: DataTypes.STRING
        },
        inicio: {
            type: DataTypes.DATE
        },
        
        final: {
            type: DataTypes.DATE
        },
        usuario_idusuarios: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        } ,
        clases_idclases: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        } 
    },
    {
        timestamps: false
    }
)

export default Evento