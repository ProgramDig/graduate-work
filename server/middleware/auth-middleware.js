const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    if(req.method === 'OPTIONS') {
        next()
    }
    try {
        let token;
        if(req.headers.authorization) {
            token = req.headers.authorization.split(' ')[1]
        }
        if(!token) {
            return res.status(403).json({message: 'Користувач не авторизований.'})
        }
        const decodedToken = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        req.user = decodedToken
        next()
    } catch (e) {
        console.log(`Server error \n${e.message}`)
        return res.status(403).json({message: 'Користувач не авторизований.'})
    }
}