import { Request, Response } from 'express';
import { Actividad, Usuario } from '../model';

export const getActividad = async (req: Request, res: Response) => {

    const actividad = await Actividad.findAll({
        attributes: [
            'actividad', 'comentario', 'nota'
        ],
        include: {
            model: Usuario,
            attributes: ['nombres', 'apellidos'],
            where: { estado: true }
        }
    })

    res.status(200).json(
        actividad
    )

}

export const getActividadID = async (req: Request, res: Response) => {

    const { id } = req.params

    const actividad = await Actividad.findByPk(id)

    res.status(200).json(
        actividad
    )

}

export const postActividad = async (req: Request, res: Response) => {

    const { body } = req

    try {

        const actividad = await Actividad.create(body)
        await actividad.save()
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

export const putActividad = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    try {

        const actividad = await Actividad.findByPk(id)

        if (!actividad) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            })
        }

        await actividad.update(body)

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

export const deleteActividad = async (req: Request, res: Response) => {

    const { id } = req.params

    const actividad = await Actividad.findByPk(id)

    if (!actividad) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    await actividad.update({ estado: false })

    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    })

}