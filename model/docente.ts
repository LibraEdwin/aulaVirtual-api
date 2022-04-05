import { DataTypes } from 'sequelize'
import db from '../db/connection'

const docente = db.define('Docente',
    {
        iddocentes: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        usuarios_idusuarios: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        cursos_idcursos: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    },
    {
        timestamps: false
    }
)

export default docente