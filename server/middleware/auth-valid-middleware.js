const {check} = require("express-validator");

const MIN = 6
const MAX = 32

const EMAIL_MESSAGE=`Некоректний email.`
const LOGIN_MESSAGE=`Довжина логіна має бути більше ніж ${MIN} символів і менша ніж ${MAX}.`

const FULL_NAME_MESSAGE=`Некоректно введений ПІБ. Приклад: Анохін Дмитро Леонідович.`
const FULL_NAME_REGEXP=/^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/g

const PASSWORD_MESSAGE=`Надто простий пароль. Довжина пароля має бути більша ніж ${MIN} символів і менша ніж ${MAX}.`

const ROLE_MESSAGE='Некоректна роль користувача.'
const ROLES=['ADMIN','DEPARTMENT_HEAD','SCIENTIFIC_EMPLOYER','TEACHER']

const regValidation = [
    check('email', EMAIL_MESSAGE).isEmail(),
    check('login', LOGIN_MESSAGE).isLength({min: MIN, max: MAX}),
    check('fullName', FULL_NAME_MESSAGE).matches(FULL_NAME_REGEXP),
    check('password', PASSWORD_MESSAGE).isLength({min: MIN, max: MAX}),
    check('role', ROLE_MESSAGE).isIn(ROLES)
]

const logValidation = [
    check('login', `Введіть коректний логін.`)
        .exists(),
    check('password', `Ведіть коректний пароль`)
        .exists()
]

module.exports = {regValidation, logValidation}