
const services = require('../services')

function verUser (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(200).send({ message: 'No tienes autorización' })
  }

  const token = req.headers.authorization.split(' ')[1]

  services.confirmRol(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(response => {
      res.status(response.status)
    })
}

module.exports = verUser