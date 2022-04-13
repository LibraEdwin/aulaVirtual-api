import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import { Alumno, Usuario } from '../../model';

export const postUsuarioAlumno = async (req: Request, res: Response) => {

    let { nombres, apellidos, correo, contraseña, img } = req.body

    const rol = 'ALUMNO'

    const salt = bcryptjs.genSaltSync()
    contraseña = bcryptjs.hashSync(contraseña, salt)
    

    try {
        const usuario = await Usuario.create({ nombres, apellidos, correo, contraseña, img, rol })
        await usuario.save()

        const user: any = await Usuario.findOne({
            where: {
                nombres,
                apellidos
            }
        })
        const idusuarios = parseInt(user.idusuarios)
        await Alumno.create({ usuarios_idusuarios: idusuarios })
        res.status(201).json({
            msg: 'Alumno registrado'
        })
    } catch (error) {
        return res.status(401).json(
            {
                error: [
                    {
                        value: "postUsuarioAlumno",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllersPostAdmin"
                    }
                ]
            }
        )
    }

}