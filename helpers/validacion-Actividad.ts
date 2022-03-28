import { Evento, Usuario } from "../model"

export const verificacionUsuario = async (usuario_idusuarios = '') => {

    const usuario = await Usuario.findByPk(usuario_idusuarios)

    if (!usuario) {
        throw new Error(
            `El id ${usuario_idusuarios} no corresponde a ningun usuario`)
    }

}

export const verificacionEvento = async (eventos_ideventos = '') => {

    const evento = await Evento.findByPk(eventos_ideventos)

    if (!evento) {
        throw new Error(
            `El id ${eventos_ideventos} no corresponde a ningun evento`)
    }

}