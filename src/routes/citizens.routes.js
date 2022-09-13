const router = require("express").Router()
const citizensController = require('../controllers/citizens.controller')

router.get('/', citizensController.funcional)

module.exports = router;