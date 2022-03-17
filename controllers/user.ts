import { Request, Response } from 'express';
import { Actividad, Evento, Usuario } from '../model';

export const getUser = async (req: Request, res: Response) => {

    const user = await Usuario.findAll({
        attributes:[
            'nombres','apellidos','correo','contraseña','img','rol'
        ],
        include: [
            Actividad
        ],
        where:{
            rol:'ALUMNO'
        }
    })

    res.status(200).json(
        user
    )

}

export const getUserID = async (req: Request, res: Response) => {

    const { id } = req.params

    const user = await Usuario.findByPk(id)

    res.status(200).json(
        user
    )

}

export const postUser = async (req: Request, res: Response) => {

    const { body } = req

    try {

        const user = await Usuario.create(body)
        await user.save()
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

export const putUser = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    try {

        const user = await Usuario.findByPk(id)

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            })
        }

        await user.update(body)

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

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params

    const user = await Usuario.findByPk(id)

    if (!user) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    await user.update({ estado: false })

    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    })

}