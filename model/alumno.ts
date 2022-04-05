import { DataTypes } from 'sequelize'
import db from '../db/connection'

const alumno = db.define('Alumno',
    {
        idalumnos: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        aulas_idaulas: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        usuarios_idusuarios: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
    },
    {
        timestamps: false
    }
)

export default alumno