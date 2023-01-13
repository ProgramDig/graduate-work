const {check} = require("express-validator");

const MIN = 6
const MAX = 32

const regValidation = [
    check('login', `Довжина логіна має бути більше ніж ${MIN} символів і менша ніж ${MAX}.`)
        .isLength({min: MIN, max: MAX}),
    check('password', `Довжина пароля має бути більша ніж ${MIN} символів і менша ніж ${MAX}.`)
        .isLength({min: MIN, max: MAX})
]

const logValidation = [
    check('login', `Введіть коректний логін.`)
        .exists(),
    check('password', `Ведіть коректний пароль`)
        .exists()
]

module.exports = {regValidation, logValidation}