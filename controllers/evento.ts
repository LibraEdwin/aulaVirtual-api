import { Request, Response } from 'express';
import { Evento } from '../model';

export const getEvento = async (req: Request, res: Response) => {

    const evento = await Evento.findAll()

    res.status(200).json(
        evento
    )

}

export const getEventoID = async (req: Request, res: Response) => {

    const { id } = req.params

    const evento = await Evento.findByPk(id)

    res.status(200).json(
        evento
    )

}

export const postEvento = async (req: Request, res: Response) => {

    const { body } = req

    try {

        const evento = await Evento.create(body)
        await evento.save()
        res.status(201).json({
            ok: true,
            msg: 'Usuario registrado'
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })

    }

}

export const putEvento = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    try {

        const evento = await Evento.findByPk(id)

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            })
        }

        await evento.update(body)

        res.status(201).json({
            ok: true,
            msg: 'Usuario actualizaddo'
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })

    }

}

export const deleteEvento = async (req: Request, res: Response) => {

    const { id } = req.params

    const evento = await Evento.findByPk(id)

    if (!evento) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    await evento.update({ estado: false })

    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    })

}