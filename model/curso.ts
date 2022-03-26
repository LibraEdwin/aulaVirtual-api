import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Curso = db.define('Curso',
    {
        idcursos: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        curso: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    }
)

export default Curso