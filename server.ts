import express, { Application } from 'express'
import useRoutUsuario from './routes/usuario'
import useRoutActividad from './routes/actividad'
import cors from 'cors'
import db from './db/connection'

class Server {

    private app: Application
    private port: string
    private apiPaths = {
        usuario: '/usuario',
        actividad: '/actividad'
    }

    constructor() {

        this.app = express()
        this.port = process.env.PORT || '8000'

        this.dbConnection()

        this.middlewares()

        this.routes()

    }

    async dbConnection() {
        try {

            await db.authenticate()
            console.log(`Db online en el puerto ${this.port}`)

        } catch (error) {

            console.error(`Error en la base de datos ${error}`)

        }
    }

    middlewares() {

        this.app.use(cors())

        this.app.use(express.json())

        this.app.use(express.static('public'))

    }

    routes() {
        this.app.use(this.apiPaths.usuario, useRoutUsuario)
        this.app.use(this.apiPaths.actividad, useRoutActividad)
    }

    listen() {
        this.app.listen(this.port)
    }
}

export default Server