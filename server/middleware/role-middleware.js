const jwt = require('jsonwebtoken')

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({message: 'Користувач не авторизований.'})
            }
            const {role} = jwt.decode(token, process.env.JWT_ACCESS_SECRET)
            let hasRole = false
            if(roles === role){
                hasRole = true
            }
            if (!hasRole) {
                return  res.status(403).json({message: 'У вас недостатньо прав.'})
            }
            next()
        } catch (e) {
            console.log(e)
            return  res.status(403).json({message: 'Користувач не авторизований.'})
        }
    }
}