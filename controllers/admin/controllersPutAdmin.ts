import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs'
import { Alumno, Usuario } from '../../model';

export const putUsuarioAlumno = async (req: Request, res: Response) => {

    const { id } = req.params
    let { nombres, apellidos, correo, contraseña, img } = req.body

    if (contraseña) {
        const salt = bcryptjs.genSaltSync()
        contraseña = bcryptjs.hashSync(contraseña, salt)
    }

    try {

        let user: any | null

        user = await Usuario.findByPk(id)

        await user.update({ nombres, apellidos, correo, contraseña, img })

        res.status(201).json({
            ok: true,
            msg: 'Usuario actualizaddo'
        })

    } catch (error) {
        {
            error: [
                {
                    value: "putUsuarioAlumno",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "controllersPutAdmin"
                }
            ]
        }
    }

}

export const putAsignarUsuarioAlumno = async (req: Request, res: Response) => {

    const { id } = req.params
    let { aulas_idaulas } = req.body

    try {

        let user: any | null

        user = await Alumno.findByPk(id)

        await user.update({
            aulas_idaulas
        })

        res.status(201).json({
            ok: true,
            msg: 'Usuario actualizaddo'
        })

    } catch (error) {
        {
            error: [
                {
                    value: "putAsignarUsuarioAlumno",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "controllersPutAdmin"
                }
            ]
        }
    }

}

export const putUsuarioAlumnoDesactivado = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        await Usuario.update({ estado: false }, {
            where: {
                idusuarios: id
            }
        });

        res.status(201).json({
            ok: true,
            msg: 'Usuario Desactivado'
        })

    } catch (error) {

        res.status(500).json(
            {
                error: [
                    {
                        value: "putUsuarioAlumnoDesactivado",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllersPutAdmin"
                    }
                ]
            }
        )

    }
}

export const putUsuarioAlumnoActivado = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        await Usuario.update({ estado: true }, {
            where: {
                idusuarios: id
            }
        });

        res.status(201).json({
            ok: true,
            msg: 'Usuario Activado'
        })

    } catch (error) {

        res.status(500).json(
            {
                error: [
                    {
                        value: "putUsuarioAlumnoActivado",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllersPutAdmin"
                    }
                ]
            }
        )

    }
}