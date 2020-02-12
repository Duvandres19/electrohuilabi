const {
    Router
} = require('express');
const router = Router();

const {
    createUser,
    getUsers,
    signIn,
    updateUser,
    deleteUser
} = require('../controllers/usuarios')

const {
    getFiltros,
    getTableComercial,
    getReconexion,
    getControlPerdidas,
    getFacturacion
} = require('../controllers/index.controllers')


//ruta para usuarios
router.get('/user',getUsers);
router.post('/user/create', createUser);
router.post('/login',signIn)
router.post('/user/alter/:codigo',updateUser);
router.post('/user/delete/:codigo', deleteUser);

router.get('/filtros', getFiltros);

//Rutas para la vista Comercial
router.get('/comercial', getTableComercial);

//Rutas para la vista Reconexion
router.get('/reconexion', getReconexion);

//Rutas para la vista Control Perdidas
router.get('/controlperdidas', getControlPerdidas);

//Rutas para la vista Facturacion
router.get('/facturacion', getFacturacion);


module.exports = router;