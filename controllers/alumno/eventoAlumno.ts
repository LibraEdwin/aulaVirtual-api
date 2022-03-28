import { Request, Response } from 'express';
import { Evento, Usuario, Actividad, Aula, Clase, Curso } from '../../model';
import moment from 'moment'

moment.locale('es')

export const getEventosAlumno = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        const evento = await Evento.findAll(
            {
                attributes: [
                    'actividad', 'comentario', 'archivo', 'inicio', 'final'
                ],
                where: {
                    usuario_idusuarios: id

                },
                include: [
                    {
                        model: Usuario,
                        attributes: [
                            'nombres', 'apellidos'
                        ]
                    },
                    {
                        model: Clase,
                        attributes: [
                            'tema'
                        ],
                        include: [
                            {
                                model: Aula,
                                attributes: [
                                    'grado', 'seccion'
                                ]
                            },
                            {
                                model: Curso,
                                attributes: [
                                    'curso'
                                ]
                            }
                        ]
                    },
                ]
            }
        )

        res.status(200).json(evento)

    } catch (error) {

        return res.status(401).json(
            {
                error: [
                    {
                        value: "getEventosAlumno",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "eventoAlumno"
                    }
                ]
            }
        )

    }
}