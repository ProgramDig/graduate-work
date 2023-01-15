import {createContext} from "react";

function noop() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    role: null,
    login: noop,
    logout: noop,
    isAuth: false
})