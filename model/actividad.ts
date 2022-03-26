import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Actividad = db.define('Actividad',
    {
        idactividads: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        comentario: {
            type: DataTypes.STRING
        },
        archivo: {
            type: DataTypes.STRING
        },
        nota: {
            type: DataTypes.INTEGER
        },
        usuario_idusuarios: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        eventos_ideventos: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

export default Actividad 