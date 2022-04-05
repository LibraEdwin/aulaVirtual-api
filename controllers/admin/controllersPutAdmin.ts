import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs'
import { Usuario } from '../../model';

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

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })

    }

}