const router = require("express").Router()
const citizensController = require('../controllers/citizens.controller')
const validate = require('../middlewares/validate')
const citizenScheme = require('../middlewares/schemes/citizens.scheme')

router.get('/', validate(citizenScheme.consultaCitizen), citizensController.funcional)
//router.get('/', citizensController.funcional)

module.exports = router;