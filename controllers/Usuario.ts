import { Request, Response } from 'express';
import { Usuario } from '../model';

export const getUsuario = async (req: Request, res: Response) => {

    const usuario = await Usuario.findAll()

    res.status(200).json(
        usuario
    )

}

export const getUsuarioID = async (req: Request, res: Response) => {

    const { id } = req.params

    const usuario = await Usuario.findByPk(id)

    res.status(200).json(
        usuario)

}

export const postUsuario = async (req: Request, res: Response) => {

    const { body } = req

    try {

        const usuario = await Usuario.create(body)
        await usuario.save()
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

export const putUsuario = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    try {

        const usuario = await Usuario.findByPk(id)

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            })
        }

        await usuario.update(body)

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

export const deleteUsuario = async (req: Request, res: Response) => {

    const { id } = req.params

    const usuario = await Usuario.findByPk(id)

    if (!usuario) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    await usuario.update({ estado: false })

    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    })

}