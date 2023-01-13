const Router = require('express')
const authController = require('../controllers/auth-controller')
const authMiddleware = require('../middleware/auth-middleware')
const roleMiddleware = require('../middleware/role-middleware')
const validation = require('../middleware/auth-valid-middleware')

const router = new Router()

router.post('/registration', validation, authController.registration)
router.post('/login', authController.login)
router.get('/users',authMiddleware , authController.getUsers)
router.get('/admin', roleMiddleware(['ADMIN']), authController.getUsers) // test

module.exports = router