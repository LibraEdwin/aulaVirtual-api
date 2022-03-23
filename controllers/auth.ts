import { Request, Response } from 'express';
import { Usuario } from '../model';
import bcryptjs from 'bcryptjs'

export const login = async (req: Request, res: Response) => {

    const { correo, contraseña } = req.body

    try {

        let usuario: any | null

        usuario = await Usuario.findOne({ where: { correo } })

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña son incorrectos - correo'
            })
        }

        if (!usuario.estado) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña son incorrectos - estado'
            })
        }

        const validContraseña = bcryptjs.compareSync(contraseña, usuario.contraseña)
        
        if(!validContraseña){
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña son incorrectos - contraseña'
            })
        }

        res.status(500).json({
            ok: true,
            msg: 'Login ok'
    
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'

        })

    }


}