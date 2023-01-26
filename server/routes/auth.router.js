const Router = require('express')
const authController = require('../controllers/auth-controller')
const authMiddleware = require('../middleware/auth-middleware')
const roleMiddleware = require('../middleware/role-middleware')
const {regValidation, logValidation} = require('../middleware/auth-valid-middleware')

const router = new Router()

// api/auth/..
router.post('/registration', regValidation, authController.registration)
router.post('/login', logValidation, authController.login)
router.get('/users', authController.getUsers)

// // role test
// // auth users role: USER
// // login: admin22 pass: admin22
// router.get('/admin', roleMiddleware(['ADMIN']), authController.getUsers)
// // login: teacher22 pass: teacher22
// router.get('/teacher', roleMiddleware(['TEACHER']), authController.getUsers)
// // login: departhead22 pass: departhead22
// router.get('/department-head', roleMiddleware(['DEPARTMENT_HEAD']), authController.getUsers)
// // login: scientemployer22 pass: scientific-employer22
// router.get('/scientific-employer', roleMiddleware(['SCIENTIFIC_EMPLOYER']), authController.getUsers)

module.exports = router