const jwt = require('jsonwebtoken')

class TokenService {
    generateAccessToken(id, roles) {
        const payload = {
            id,
            roles
        }
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '1h'})
        return {accessToken}
    }
}
module.exports = new TokenService()