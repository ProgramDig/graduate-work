const Router = require('express')
const roleMiddleware = require('../middleware/role-middleware')
const adminController = require('../controllers/admin-controller')
const {updateValidation} = require('../middleware/auth-valid-middleware')

const router = new Router()

// get all
router.get('/users', roleMiddleware('ADMIN'), adminController.getUsers)
// get one
router.get('/users/:nickname', roleMiddleware('ADMIN'), adminController.getUser)
// delete one
router.delete('/users', roleMiddleware('ADMIN'),adminController.deleteUser)
// update one
router.put('/users',updateValidation , roleMiddleware('ADMIN'), adminController.updateOneUser)
// add new
router.post('/users', roleMiddleware('ADMIN'), (req, res) => {})
// delete all
router.delete('/users', roleMiddleware('ADMIN'),(req, res) => {})


module.exports = router