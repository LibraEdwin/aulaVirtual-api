import { Request, Response } from 'express';
import { Evento, Usuario, Actividad, Aula, Clase, Curso, Aula_usuario, Curso_usuario } from '../../model';
import moment from 'moment'

moment.locale('es')

export const getAula = async (req: Request, res: Response) => {

    try {
        const aula = await Aula.findAll({ order: ['grado'] })

        res.status(200).json(
            aula
        )
    } catch (error) {
        return res.status(401).json(
            {
                error: [
                    {
                        value: "getGradoAula",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllersGetAdmin"
                    }
                ]
            }
        )

    }

}
export const getAlumnos = async (req: Request, res: Response) => {

    const user = await Aula_usuario.findAll({
        include: [{
            model: Usuario,
            where: {
                estado: true,
                rol: 'ALUMNO',
            }
        }],

    })

    res.status(200).json(
        user
    )

}