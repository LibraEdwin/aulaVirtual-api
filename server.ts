import express, { Application } from 'express'
import useRout from './routes/user'
import cors from 'cors'
import db from './db/connection'

class Server {

    private app: Application
    private port: string
    private apiPaths = {
        user: '/user'
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

            console.log('Error en la base de datos')

        }
    }

    middlewares() {

        this.app.use(cors())

        this.app.use(express.json())

    }

    routes() {
        this.app.use(this.apiPaths.user, useRout)
    }

    listen() {
        this.app.listen(this.port)
    }
}

export default Server