const {check, oneOf} = require("express-validator");

const MIN = 3
const MAX = 32

const EMAIL_MESSAGE = `Некоректний email.`
const LOGIN_MESSAGE = `Довжина логіна має бути більше ніж ${MIN} символів і менша ніж ${MAX} та не має містити спец символів окрім "-", ".", "_".`

const FULL_NAME_MESSAGE = `Некоректно введений ПІБ. Приклад: Анохін Дмитро.`
    const FULL_NAME_REGEXP = /^([A-z]{1})([a-z]{1,30})\s([A-z]{1}[a-z]{1,30})$/ // fix

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const NICKNAME_REGEX = /^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$/;

const PASSWORD_MESSAGE = `Надто простий пароль. Довжина пароля має бути більша ніж ${MIN} символів і менша ніж ${MAX}.`

const ROLE_MESSAGE = 'Некоректна роль користувача.'
const ROLES = ['ADMIN', 'DEPARTMENT_HEAD', 'SCIENTIFIC_EMPLOYER', 'TEACHER']

const regValidation = [
    check('email', EMAIL_MESSAGE).matches(EMAIL_REGEX),
    check('login', LOGIN_MESSAGE)
        .isLength({min: MIN, max: MAX})
        .matches(NICKNAME_REGEX)
        .withMessage('Видаліть спецсимволи'),
    check('fullName', FULL_NAME_MESSAGE).matches(FULL_NAME_REGEXP),
    check('password', PASSWORD_MESSAGE).isLength({min: MIN, max: MAX}),
    check('role', ROLE_MESSAGE).isIn(ROLES)
]

const logValidation = [
    oneOf([
        check('nickname')
            .exists()
            .isLength({min: 3})
            .withMessage('Введіть коректний логін.'),

        check('nickname')
            .exists()
            .isEmail()
            .withMessage('Ведіть коректну пошту.'),
    ]),
    check('password')
        .exists()
        .withMessage('Ведіть коректний пароль.')
];

const updateValidation = [
    check('email', EMAIL_MESSAGE).matches(EMAIL_REGEX),
    check('login', LOGIN_MESSAGE)
        .isLength({min: MIN, max: MAX})
        .matches(NICKNAME_REGEX)
        .withMessage('Видаліть спецсимволи'),
    check('fullName', FULL_NAME_MESSAGE).matches(FULL_NAME_REGEXP),
];

module.exports = {regValidation, logValidation, updateValidation}