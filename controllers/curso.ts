import { Request, Response } from 'express';
import { Curso } from '../model';

export const getCurso = async (req: Request, res: Response) => {

    const curso = await Curso.findAll()

    res.status(200).json(
        curso
    )

}

export const getCursoID = async (req: Request, res: Response) => {

    const { id } = req.params

    const curso = await Curso.findByPk(id)

    res.status(200).json(
        curso
    )

}

export const postCurso = async (req: Request, res: Response) => {

    const { body } = req

    try {

        const curso = await Curso.create(body)
        await curso.save()
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

export const putCurso = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    try {

        const curso = await Curso.findByPk(id)

        if (!curso) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            })
        }

        await curso.update(body)

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

export const deleteCurso = async (req: Request, res: Response) => {

    const { id } = req.params

    const curso = await Curso.findByPk(id)

    if (!curso) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    await curso.update({ estado: false })

    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    })

}