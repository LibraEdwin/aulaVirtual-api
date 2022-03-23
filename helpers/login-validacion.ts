import { Usuario } from "../model"

export const correoIncorrecto = async (correo = '') => {

    let usuario: any | null

    usuario = await Usuario.findOne({ where: { correo } })

    if (!usuario) {
        throw new Error(
            `Usuario o contraseña son incorrectos - correo`)
    }
}

export const estadoFalse = async (correo = '') => {

    let usuario: any | null

    usuario = await Usuario.findOne({ where: { correo } })

    if (!usuario.estado) {
        throw new Error(
            'Usuario o contraseña son incorrectos - estado')
    }


}