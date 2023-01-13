const {check} = require("express-validator");

const MIN = 6
const MAX = 32

const validation = [
    check('login', `Довжина логіна має бути більше ніж ${MIN} символів і менша ніж ${MAX}.`)
        .isLength({min: MIN, max: MAX}),
    check('password', `Довжина пароля має бути більша ніж ${MIN} символів і менша ніж ${MAX}.`)
        .isLength({min: MIN, max: MAX})
]

module.exports = validation