import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Curso = db.define('Curso', {
    idactividad: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    curso: {
        type: DataTypes.STRING
    }
})

export default Curso