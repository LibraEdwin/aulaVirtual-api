import jwt from 'jsonwebtoken'

let FirmaToken: string | any
FirmaToken = process.env.FIRMATOKENKEY

export const generarJWT = (id='') => {
    return new Promise((resolve, reject) => {

        const payload = { id }

        jwt.sign(payload, FirmaToken, {
            expiresIn: '4h'
        }, (err, token) => {
            if(err){
                reject('No se pudo generar el token')
            }else{
                resolve(token)
            }
        })
    })
}