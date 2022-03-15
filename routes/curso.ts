import { Router } from "express";
import { getCurso, getCursoID, postCurso, putCurso, deleteCurso } from '../controllers/curso';

const routerCurso = Router()

routerCurso.get('/', getCurso)

routerCurso.get('/:id', getCursoID)

routerCurso.post('/', postCurso)

routerCurso.put('/:id', putCurso)

routerCurso.delete('/:id', deleteCurso)

export default routerCurso