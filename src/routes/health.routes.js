const router = require("express").Router()
const healthController = require('../controllers/health.controller')

router.get('/', healthController.funcional)

module.exports = router;