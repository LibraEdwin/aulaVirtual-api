import { Usuario } from "../model"

export const existeID = async (id = '') => {

    const user = await Usuario.findByPk(id)

    if (!user) {
        throw new Error(
            `El ID ${id} no existe`)
    }

}