import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Clase = db.define('Clase', {
    idclases: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    tema: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    },
    inicio: {
        type: DataTypes.INTEGER
    },
    final: {
        type: DataTypes.INTEGER
    },
    aulas_idaulas: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    cursos_idcursos: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
})

export default Clase 