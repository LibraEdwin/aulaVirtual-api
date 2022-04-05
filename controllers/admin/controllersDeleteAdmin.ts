import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs'
import { Usuario } from '../../model';

export const deleteUsuarioAlumno = async (req: Request, res: Response) => {

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
                        value: "deleteUsuarioAlumno",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllersDeleteAdmin"
                    }
                ]
            }
        )

    }

}