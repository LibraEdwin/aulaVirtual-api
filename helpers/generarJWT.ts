import jwt from 'jsonwebtoken'

export const generarJWT = (id='') => {
    return new Promise((resolve, reject) => {

        const payload = { id }

        jwt.sign(payload, 'Esto3sM7Firm@DE1TokEn$$', {
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