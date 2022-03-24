import { Request, Response } from 'express';
import { Actividad, Usuario } from '../model';
import bcryptjs from 'bcryptjs'

export const getUser = async (req: Request, res: Response) => {

    const user = await Usuario.findAll(
        //     {
        //     attributes:[
        //         'nombres','apellidos','correo','contraseña','img','rol'
        //     ],
        //     include: [
        //         Actividad
        //     ],
        //     where:{
        //         rol:'DOCENTE'
        //     }
        // }
    )

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

    let { nombres, apellidos, correo, contraseña, img, rol } = req.body

    try {

        const salt = bcryptjs.genSaltSync()
        contraseña = bcryptjs.hashSync(contraseña, salt)

        const user = await Usuario.create({ nombres, apellidos, correo, contraseña, img, rol })

        await user.save()
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

export const putUser = async (req: Request, res: Response) => {

    const { id } = req.params
    let { idusuarios, correo, rol, estado, createdAt, updatedAt, ...resto } = req.body

    if (resto.contraseña) {
        const salt = bcryptjs.genSaltSync()
        resto.contraseña = bcryptjs.hashSync(resto.contraseña, salt)
    }

    try {

        let user: any | null

        user = await Usuario.findByPk(id)

        await user.update(resto)

        res.status(201).json({
            ok: true,
            msg: 'Usuario actualizaddo'
        })

    } catch (error) {

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

    try {

        await user.update({ estado: false })

        res.status(200).json({
            ok: true,
            msg: 'Usuario desactivado'
        })

    } catch (error) {

        res.status(500).json(
            {
                error: [
                    {
                        value: "desactivar usuario",
                        msg: "Hable con el administrador",
                        param: "desactivar",
                        location: "deleteUser"
                    }
                ]
            }
        )
    }

}