import { Request, Response } from 'express';
import { Aula, Clase, Curso, Curso_usuario, Usuario } from '../model';

export const getClase = async (req: Request, res: Response) => {

    const clase = await Clase.findAll(
    //     {
    //     attributes: [
    //         'tema', 'link', 'inicio', 'final'
    //     ],
    //     include: [{
    //         model:Aula,
    //         attributes: [
    //             'grado', 'seccion'
    //         ]
    //     },
    //     {
    //         model:Curso,
    //         attributes: [
    //             'curso'
    //         ],
    //         include:[{
    //             model:Curso_usuario,
    //             include:[{
    //                 model:Usuario
    //             }]
    //         }]
    //     }]
    // }
    )

    res.status(200).json(
        clase
    )

}

export const getClaseID = async (req: Request, res: Response) => {

    const { id } = req.params

    const clase = await Clase.findByPk(id)

    res.status(200).json(
        clase
    )

}

export const postClase = async (req: Request, res: Response) => {

    const { body } = req

    try {

        const clase = await Clase.create(body)
        await clase.save()
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

export const putClase = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    try {

        const clase = await Clase.findByPk(id)

        if (!clase) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            })
        }

        await clase.update(body)

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

export const deleteClase = async (req: Request, res: Response) => {

    const { id } = req.params

    const clase = await Clase.findByPk(id)

    if (!clase) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        })
    }

    await clase.update({ estado: false })

    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    })

}