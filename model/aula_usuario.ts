import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Aula_usuario = db.define('Aula_usuario', {
    usuario_idusuarios: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    aulas_idaulas: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    }
},
    {
        timestamps: false
    }
)

export default Aula_usuario