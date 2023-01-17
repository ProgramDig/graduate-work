const jwt = require('jsonwebtoken')

class TokenService {
    generateAccessToken(id, role) {
        const payload = {
            id,
            role
        }
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '1h'})
        return {accessToken}
    }
}
module.exports = new TokenService()