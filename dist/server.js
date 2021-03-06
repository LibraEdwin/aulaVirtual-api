"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./db/connection"));
const routerAdmin_1 = __importDefault(require("./routes/admin/routerAdmin"));
class Server {
    constructor() {
        this.apiPaths = {
            authPath: '/paths/auth',
            actividad: '/paths/actividad',
            aula: '/paths/aula',
            clase: '/paths/clase',
            curso: '/paths/curso',
            evento: '/paths/evento',
            user: '/paths/usuario',
            eventoAlumno: '/alumno',
            admin: '/admin'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.username = process.env.PORTDATABASE;
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log(`BD: ${this.username} online en el puerto ${this.port}`);
            }
            catch (error) {
                console.error(`Error en la base de datos ${error}`);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.authPath, routes_1.routerAuth);
        this.app.use(this.apiPaths.actividad, routes_1.routerActividad);
        this.app.use(this.apiPaths.aula, routes_1.routerAula);
        this.app.use(this.apiPaths.clase, routes_1.routerClase);
        this.app.use(this.apiPaths.curso, routes_1.routerCurso);
        this.app.use(this.apiPaths.evento, routes_1.routerEvento);
        this.app.use(this.apiPaths.user, routes_1.routerUser);
        this.app.use(this.apiPaths.eventoAlumno, routes_1.routerAlumno);
        this.app.use(this.apiPaths.admin, routerAdmin_1.default);
    }
    listen() {
        this.app.listen(this.port);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map