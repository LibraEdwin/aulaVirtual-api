import express, { Application } from 'express'
import { routerActividad, routerAula, routerCurso, routerEvento, routerUser, routerCurso_usuario, routerAula_usuario } from './routes'
import cors from 'cors'
import db from './db/connection'

class Server {

    private app: Application
    private port: string
    private apiPaths = {
        actividad: '/paths/actividad',
        aula_usuario: '/paths/aula_usuario',
        aula: '/paths/aula',
        curso_usuario: '/paths/curso_usuario',
        curso: '/paths/curso',
        evento: '/paths/evento',
        user: '/paths/usuario'
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
        this.app.use(this.apiPaths.aula_usuario, routerAula_usuario)
        this.app.use(this.apiPaths.aula, routerAula)
        this.app.use(this.apiPaths.curso_usuario, routerCurso_usuario)
        this.app.use(this.apiPaths.curso, routerCurso)
        this.app.use(this.apiPaths.evento, routerEvento)
        this.app.use(this.apiPaths.user, routerUser)
    }

    listen() {
        this.app.listen(this.port)
    }
}

export default Server