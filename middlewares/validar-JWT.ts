import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Usuario } from '../model';

let FirmaToken: string | any
FirmaToken = process.env.FIRMATOKENKEY

export const validarJWT = async (req: Request | any, res: Response, next: NextFunction) => {

    const token = req.header('x-token')

    if (!token) {
        return res.status(401).json(
            {
                error: [
                    {
                        value: "generador de token",
                        msg: "No hay un token en la peticion",
                        param: "token",
                        location: "validarJWT"
                    }
                ]
            }
        )
    }

    try {

        let payload: string | any
        payload = jwt.verify(token, FirmaToken)

        let usuario: string | any
        usuario = await Usuario.findByPk(payload.id)

        if (!usuario) {
            return res.status(401).json(
                {
                    error: [
                        {
                            value: "generador de token",
                            msg: "Token no valido - usuario no existe",
                            param: "token",
                            location: "validarJWT"
                        }
                    ]
                }
            )
        }

        if (!usuario.estado) {
            return res.status(401).json(
                {
                    error: [
                        {
                            value: "generador de token",
                            msg: "Token no valido - esdado de usuario en falso",
                            param: "token",
                            location: "validarJWT"
                        }
                    ]
                }
            )
        }

        req.usuario = usuario

        next()

    } catch (error) {
        res.status(401).json(
            {
                error: [
                    {
                        value: "generador de token",
                        msg: "hablar con el administrador",
                        param: "token",
                        location: "validarJWT"
                    }
                ]
            }
        )
    }
}