import { Request, Response } from 'express';
import { Aula_usuario } from '../model';

export const getAula_usuario = async (req: Request, res: Response) => {

    const aula_usuario = await Aula_usuario.findAll()

    res.status(200).json(
        aula_usuario
    )

}

export const getAula_usuarioID = async (req: Request, res: Response) => {

    const { id } = req.params

    const aula_usuario = await Aula_usuario.findByPk(id)

    res.status(200).json(
        aula_usuario
    )

}

export const postAula_usuario = async (req: Request, res: Response) => {

    const { body } = req

    try {

        const aula_usuario = await Aula_usuario.create(body)
        await aula_usuario.save()
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

export const putAula_usuario = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    try {

        const aula_usuario = await Aula_usuario.findByPk(id)

        if (!aula_usuario) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            })
        }

        await aula_usuario.update(body)

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

export const deleteAula_usuario = async (req: Request, res: Response) => {

    const { id } = req.params

    const aula_usuario = await Aula_usuario.findByPk(id)

    if (!aula_usuario) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    await aula_usuario.update({ estado: false })

    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    })

}