import { Request, Response } from 'express';
import { Aula, Aula_usuario, Usuario } from '../../model';

export const getAula_usuario = async (req: Request, res: Response) => {

    const aula_usuario = await Aula_usuario.findAll({
        include: [
            {
                model: Usuario
            }, {
                model: Aula,
                where: {
                    grado: '1°',
                    seccion: 'A'
                }

            }
        ]
    })

    res.status(200).json(
        aula_usuario
    )

}