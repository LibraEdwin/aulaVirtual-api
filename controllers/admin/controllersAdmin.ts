import { Request, Response } from 'express';
import { Evento, Usuario, Actividad, Aula, Clase, Curso, Aula_usuario } from '../../model';
import moment from 'moment'

moment.locale('es')

export const getAlumnoAula = async (req: Request, res: Response) => {

    const {grado, seccion}: any = req.query

    try {

        const aula_usuario: any = await Aula_usuario.findAll({
            include: [
                {
                    model: Usuario
                }, {
                    model: Aula,
                    where: {
                        grado,
                        seccion
                    }
    
                }
            ]
        })

        res.status(200).json(aula_usuario)

    } catch (error) {

        return res.status(401).json(
            {
                error: [
                    {
                        value: "getAlumnoAula",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllers.Docente"
                    }
                ]
            }
        )

    }
}