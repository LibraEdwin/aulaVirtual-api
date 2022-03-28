import { Usuario } from "../model"

export const existeEmail = async (correo = '') => {


    const existeCorreo = await Usuario.findAll({ where: { correo } })

    console.log(existeCorreo)
    if (existeCorreo.length>0) {
        throw new Error(
            `El correo ${correo} ya esta registrado`)
    }

}