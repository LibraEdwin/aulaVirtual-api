import express, { Application } from 'express'
import useRout from './routes/Usuario'
import cors from 'cors'
import db from './db/connection'

class Server {

    private app: Application
    private port: string
    private apiPaths = {
        usuario: '/usuario'
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
        this.app.use(this.apiPaths.usuario, useRout)
    }

    listen() {
        this.app.listen(this.port)
    }
}

export default Server