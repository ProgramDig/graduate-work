const Router = require('express')
const roleMiddleware = require('../middleware/role-middleware')
const adminController = require('../controllers/admin-controller')

const router = new Router()

// get all
router.get('/users', roleMiddleware('ADMIN'), adminController.getUsers)
// get one
router.get('/users/:nickname', roleMiddleware('ADMIN'), adminController.getUser)
// add new
router.post('/users', roleMiddleware('ADMIN'), (req, res) => {

})
// update one
router.put('/users/:nickname', roleMiddleware('ADMIN'), (req, res) => {

})
// delete one
router.delete('/users/:id', roleMiddleware('ADMIN'),(req, res) => {

})
// delete all
router.delete('/users', roleMiddleware('ADMIN'),(req, res) => {

})
// get with login [admin]
router.get('/users?login=[admin]', roleMiddleware('ADMIN'),(req, res) => {

})

module.exports = router