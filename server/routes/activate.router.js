const Router = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const activateController = require('../controllers/activate-controller')

const router = new Router()
// /api/activate
router.post('/', authMiddleware, activateController.sendMessage)
router.get('/:link', activateController.activateAccount)

module.exports = router