const Router = require('express')
const userController = require('../controllers/user-controller')

const router = new Router()

router.patch('/', userController.updatePassword)


module.exports = router