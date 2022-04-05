import express, { Application } from 'express'
import { routerActividad, routerAula, routerCurso, routerEvento, routerUser, routerClase, routerAuth, routerAlumno } from './routes'
import cors from 'cors'
import db from './db/connection'
import routerAdmin from './routes/admin/routerAdmin';

class Server {

    private app: Application
    private port: string | any
    private username: string | any
    private apiPaths = {

        authPath: '/paths/auth',

        actividad: '/paths/actividad',
        aula: '/paths/aula',
        clase: '/paths/clase',
        curso: '/paths/curso',
        evento: '/paths/evento',
        user: '/paths/usuario',

        eventoAlumno: '/alumno',

        admin: '/admin'

    }

    constructor() {

        this.app = express()
        this.port = process.env.PORT
        this.username =  process.env.PORTDATABASE

        this.dbConnection()

        this.middlewares()

        this.routes()

    }

    async dbConnection() {
        try {

            await db.authenticate()
            console.log(`BD: ${this.username} online en el puerto ${this.port}`)

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

        this.app.use(this.apiPaths.authPath, routerAuth)

        this.app.use(this.apiPaths.actividad, routerActividad)
        this.app.use(this.apiPaths.aula, routerAula)
        this.app.use(this.apiPaths.clase, routerClase)
        this.app.use(this.apiPaths.curso, routerCurso)
        this.app.use(this.apiPaths.evento, routerEvento)
        this.app.use(this.apiPaths.user, routerUser)

        this.app.use(this.apiPaths.eventoAlumno, routerAlumno)

        this.app.use(this.apiPaths.admin, routerAdmin)
    }

    listen() {
        this.app.listen(this.port)
    }
}

export default Server