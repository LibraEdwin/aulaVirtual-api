import { Router } from "express";
import { getEventos } from "../../controllers/alumno/eventoAlumno";

const routerEventoAlumno = Router()

routerEventoAlumno.get('/:id', getEventos)

export default routerEventoAlumno