import express, { Application } from 'express'
import { routerActividad, routerAula } from './routes'
import cors from 'cors'
import db from './db/connection'

class Server {

    private app: Application
    private port: string
    private apiPaths = {
        actividad: '/paths/actividad',
        aula: '/paths/aula',
        curso: '/paths/curso',
        evento: '/paths/evento',
        usuario: '/paths/usuario'
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
        this.app.use(this.apiPaths.actividad, routerActividad)
        this.app.use(this.apiPaths.aula, routerAula)
        //this.app.use(this.apiPaths.usuario, routerUsuario)
    }

    listen() {
        this.app.listen(this.port)
    }
}

export default Server