import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

let Database: string | any
Database = process.env.PORTDATABASE

let Username: string | any
Username = process.env.USER

let Password: string | any
Password = process.env.PASSWORD

let host: string | any
host = process.env.HOST

let dialect: string | any
dialect = process.env.DIALECT

const db = new Sequelize(Database, Username, Password, {
    host,
    dialect,
    //logging: false
}) 

export default db 