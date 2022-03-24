import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

let FirmaToken: string | any
FirmaToken = process.env.FIRMATOKENKEY

export const validarJWT = (req: Request, res: Response, next: NextFunction) => {

    const token = req.header('x-token')

    if (!token) {
        return res.status(401).json({
            msg: 'No hay un token en la peticion'
        })
    }

    try {

        jwt.verify(token, FirmaToken)

        next()

    } catch (error) {
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}