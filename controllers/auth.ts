import { Request, Response } from 'express';
import { Usuario } from '../model';
import bcryptjs from 'bcryptjs'
import { generarJWT } from '../helpers';

export const login = async (req: Request, res: Response) => {

    const { correo, contraseña } = req.body

    try {

        let usuario: any | null

        usuario = await Usuario.findOne({ where: { correo } })

        const validContraseña = bcryptjs.compareSync(contraseña, usuario.contraseña)

        if (!validContraseña) {
            return res.status(400).json({
                error: [{
                    value: usuario.correo,
                    msg: "Usuario o contraseña son incorrectos - contraseña",
                    param: "correo",
                    location: "body"
                }]
            }
            )
        }

        const token = await generarJWT(usuario.idusuarios)

        res.status(500).json({
            usuario,
            token
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'

        })

    }


}