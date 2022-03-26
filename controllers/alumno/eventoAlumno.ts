import { Request, Response } from 'express';
import { Evento, Usuario, Actividad, Aula } from '../../model';
import moment from 'moment'

moment.locale('es')

export const getEventos = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        let [evento] : string|any = await Evento.findAll({
            where: {
                usuario_idusuarios: id
            }
        })

        const usuario = await Usuario.findByPk(evento.usuario_idusuarios)

        console.log(usuario)

        const actividad = await Actividad.findAll({
            where: {
                usuario_idusuarios: id
            }
        })

        res.status(200).json(
            {evento,
                usuario}
        )

    } catch (error) {

        return res.status(401).json(
            {
                error: [
                    {
                        value: "getEventos",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "eventoAlumno"
                    }
                ]
            }
        )

    }



}