import { Request, Response } from 'express';
import { Actividad, Evento, Usuario } from '../../model';
import moment from 'moment'

moment.locale('es')

export const postActividadAlumno = async (req: Request, res: Response) => {

    const { comentario, archivo, apellidos, nombres, actividad, inicio, final } = req.body

    const usuario: string | any = await Usuario.findOne({
        where: {
            nombres,
            apellidos
        }
    })

    if (!usuario) {
        return res.status(400).json(
            {
                error: [
                    {
                        value: "apellidos, nombres",
                        msg: "Docente no encontrado",
                        param: "usuario",
                        location: "body"
                    }
                ]
            }
        )
    }

    const usuario_idusuarios = usuario.idusuarios

    const evento: string | any = await Evento.findOne({
        where: {
            actividad, inicio: moment(inicio), final: moment(final)
        }
    })

    if (!evento) {
        return res.status(400).json(
            {
                error: [
                    {
                        value: "actividad, inicio, final",
                        msg: "Evento no encontrado",
                        param: "evento",
                        location: "body"
                    }
                ]
            }
        )
    }


    const eventos_ideventos = evento.ideventos

    try {

        const actividad = await Actividad.create({ comentario, archivo, usuario_idusuarios, eventos_ideventos })

        await actividad.save()
        res.status(201).json({
            ok: true,
            msg: 'Actividad registrado'
        })

    } catch (error) {

        return res.status(401).json(
            {
                error: [
                    {
                        value: "postActividadAlumno",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "actividadAlumno"
                    }
                ]
            }
        )
    }

}