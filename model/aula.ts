import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Aula = db.define('Aula', {
    idaulas: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    grado: {
        type: DataTypes.STRING
    },
    seccion: {
        type: DataTypes.STRING
    }
})

export default Aula