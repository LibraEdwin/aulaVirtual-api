import { Request, Response } from 'express';
import { Aula } from '../model';

export const getAula = async (req: Request, res: Response) => {

    const aula = await Aula.findAll()

    res.status(200).json(
        aula
    )

}

export const getAulaID = async (req: Request, res: Response) => {

    const { id } = req.params

    const aula = await Aula.findByPk(id)

    res.status(200).json(
        aula
    )

}

export const postAula = async (req: Request, res: Response) => {

    const { body } = req

    try {

        const aula = await Aula.create(body)
        await aula.save()
        res.status(201).json({
            ok: true,
            msg: 'Usuario registrado'
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })

    }

}

export const putAula = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    try {

        const aula = await Aula.findByPk(id)

        if (!aula) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            })
        }

        await aula.update(body)

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

export const deleteAula = async (req: Request, res: Response) => {

    const { id } = req.params

    const aula = await Aula.findByPk(id)

    if (!aula) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    await aula.update({ estado: false })

    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    })

}