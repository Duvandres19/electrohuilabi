const {
    Pool
} = require('pg')

const conexion = new Pool({
    host: '190.15.16.99', //'localhost',
    user: 'postgres',
    password: 'Datalab-2019',
    database: 'dwelectrohuila',
    port: '5432'
})

// readonly ElectroHuila-2019


module.exports = {
    conexion,
    SECRET_TOKEN: 'claveTokens'
};