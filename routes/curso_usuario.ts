import { Router } from "express";
import { getCurso_usuario, getCurso_usuarioID, postCurso_usuario, putCurso_usuario, deleteCurso_usuario } from '../controllers/curso_usuario';

const routerCurso_usuario = Router()

routerCurso_usuario.get('/', getCurso_usuario)

routerCurso_usuario.get('/:id', getCurso_usuarioID)

routerCurso_usuario.post('/', postCurso_usuario)

routerCurso_usuario.put('/:id', putCurso_usuario)

routerCurso_usuario.delete('/:id', deleteCurso_usuario)

export default routerCurso_usuario