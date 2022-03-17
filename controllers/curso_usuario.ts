import { Request, Response } from 'express';
import { Curso_usuario } from '../model';

export const getCurso_usuario = async (req: Request, res: Response) => {

    const curso_usuarios = await Curso_usuario.findAll()

    res.status(200).json(
        curso_usuarios
    )

}

export const getCurso_usuarioID = async (req: Request, res: Response) => {

    const { id } = req.params

    const curso_usuarios = await Curso_usuario.findByPk(id)

    res.status(200).json(
        curso_usuarios
    )

}

export const postCurso_usuario = async (req: Request, res: Response) => {

    const { body } = req

    try {

        const curso_usuarios = await Curso_usuario.create(body)
        await curso_usuarios.save()
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

export const putCurso_usuario = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    try {

        const curso_usuarios = await Curso_usuario.findByPk(id)

        if (!curso_usuarios) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            })
        }

        await curso_usuarios.update(body)

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

export const deleteCurso_usuario = async (req: Request, res: Response) => {

    const { id } = req.params

    const curso_usuarios = await Curso_usuario.findByPk(id)

    if (!curso_usuarios) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    await curso_usuarios.update({ estado: false })

    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    })

}