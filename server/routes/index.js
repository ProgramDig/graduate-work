const Router = require('express')
const authController = require('../controllers/auth-controller')
const authMiddleware = require('../middleware/auth-middleware')
const roleMiddleware = require('../middleware/role-middleware')
const validation = require('../middleware/auth-valid-middleware')

const router = new Router()

router.post('/registration', validation, authController.registration)
router.post('/login', authController.login)

// role test
// auth users role: USER
router.get('/users',authMiddleware , authController.getUsers)
// login: admin22 pass: admin22
router.get('/admin', roleMiddleware(['ADMIN']), authController.getUsers)
// login: teacher22 pass: teacher22
router.get('/teacher', roleMiddleware(['TEACHER']), authController.getUsers)
// login: departhead22 pass: departhead22
router.get('/department-head', roleMiddleware(['DEPARTMENT_HEAD']), authController.getUsers)
// login: scientemployer22 pass: scientific-employer22
router.get('/scientific-employer', roleMiddleware(['SCIENTIFIC_EMPLOYER']), authController.getUsers)

module.exports = router