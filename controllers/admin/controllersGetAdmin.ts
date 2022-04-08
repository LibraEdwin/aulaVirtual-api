import { Request, Response } from 'express';
import { Usuario, Aula, Alumno } from '../../model';

export const getAula = async (req: Request, res: Response) => {
    try {
        const aula = await Aula.findAll({ order: ['grado'] })
        res.status(200).json(
            aula
        )
    } catch (error) {
        return res.status(401).json(
            {
                error: [
                    {
                        value: "getGradoAula",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllersGetAdmin"
                    }
                ]
            }
        )
    }
}

export const getUsuariosAlumnoActivados = async (req: Request, res: Response) => {

    try {
        const alumno = await Alumno.findAll({
            include: [{
                model: Usuario,
                attributes: ['idusuarios', 'nombres', 'apellidos', 'correo', 'contraseña', 'img'],
                where: { estado : true}
            }],
            where: {
                aulas_idaulas: null
            }
        })
        res.status(200).json(
            alumno
        )
    } catch (error) {
        return res.status(401).json(
            {
                error: [
                    {
                        value: "getUsuarios",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllersGetAdmin"
                    }
                ]
            }
        )
    }
}

export const getUsuariosAlumnoDesactivado = async (req: Request, res: Response) => {

    try {
        const alumno = await Alumno.findAll({
            include: [{
                model: Usuario,
                attributes: ['idusuarios', 'nombres', 'apellidos', 'correo', 'contraseña', 'img'],
                where: { estado : false}
            }]
        })
        res.status(200).json(
            alumno
        )
    } catch (error) {
        return res.status(401).json(
            {
                error: [
                    {
                        value: "getUsuarios",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllersGetAdmin"
                    }
                ]
            }
        )
    }
}

export const getAlumnos = async (req: Request, res: Response) => {

    try {
        const alumno = await Alumno.findAll({
            include: [{
                model: Usuario,
                attributes: ['nombres', 'apellidos', 'correo', 'img']
            }]
        })
        res.status(200).json(
            alumno
        )
    } catch (error) {
        return res.status(401).json(
            {
                error: [
                    {
                        value: "getAlumnos",
                        msg: "hable con el administrador",
                        param: "api",
                        location: "controllersGetAdmin"
                    }
                ]
            }
        )
    }
}