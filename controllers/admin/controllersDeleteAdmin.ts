import { Request, Response } from 'express';
import { Alumno, Usuario } from '../../model';

export const deleteUsuarioAlumnoDesactivado = async (req: Request, res: Response) => {

    const { id } = req.params

    try {
        const {usuarios_idusuarios}: any = await Alumno.findByPk(id)

        await Alumno.destroy(
            {
                where: {
                    idalumnos: id
                }
            }
        );

        await Usuario.destroy(
            {
                where: {
                    idusuarios: usuarios_idusuarios
                }
            }
        );

        res.status(201).json({
            msg: 'Alumno eliminado'
        })

    } catch (error) {

        res.status(500).json(
            {
                error: [
                    {
                        value: "deleteUsuarioAlumnoDesactivado",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllersDeleteAdmin"
                    }
                ]
            }
        )

    }
}