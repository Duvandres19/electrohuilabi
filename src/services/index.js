
const jwt = require('jwt-simple')
const moment = require('moment')
var fs = require('fs');
const config = require('../database/conexion')

// Creacion del token para el usuario por 31 dias 
function createToken(usuario) {
    const payload = {
        sub: usuario.codigo,
        iat: moment().unix,
        exp: moment().add(1000, 'days').unix(),
        rol: usuario.rol,
        nombre: usuario.nombres,
        apellido: usuario.apellidos
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN)

            if (payload.exp <= moment().unix()) {
                reject({
                    status: 200,
                    message: 'El token ha expirado'
                })
            }

            resolve(payload)
        } catch (err) {

            reject({
                status: 200,
                message: 'Invalid Token'
            })
        }
    })

    return decoded
}

function confirmRol(token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN)

            if (payload.exp <= moment().unix()) {
                reject({
                    status: 200,
                    message: 'El token ha expirado'
                })
            }



            resolve(payload)
        } catch (err) {

            reject({
                status: 200,
                message: 'Invalid Rol'
            })
        }
    })

    return decoded
}

module.exports = {
    createToken,
    decodeToken,
    confirmRol
}