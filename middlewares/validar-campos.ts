import { NextFunction } from 'express';
import { validationResult } from 'express-validator';
import express from 'express';

export const validarCampos = (req: express.Request, res: express.Response, next: NextFunction) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {

        return res.status(400).json(errors)

    }

    next()
}
 