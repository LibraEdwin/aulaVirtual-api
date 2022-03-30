import { Request, Response } from 'express';
import { Evento, Usuario, Actividad, Aula, Clase, Curso, Aula_usuario } from '../../model';
import moment from 'moment'

moment.locale('es')

export const getAlumnoAula = async (req: Request, res: Response) => {

    try {

        const grado = '1°'

        const seccion = 'A'

        const aula_usuario: any = await Aula_usuario.findAll({
            group: 'usuario_idusuarios'
        })

        let numero = 1

        for (let i = 0; i < aula_usuario.length; i++) {
            const element = aula_usuario[i].aulas_idaulas;
            if (element === 6) {
                numero = numero + i
            }
        }

        console.log(numero)

        res.status(200).json(aula_usuario)

    } catch (error) {

        return res.status(401).json(
            {
                error: [
                    {
                        value: "getAlumnoAula",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllers.Docente"
                    }
                ]
            }
        )

    }
}