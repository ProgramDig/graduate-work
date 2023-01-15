import {useCallback, useEffect, useState} from "react";

const LOCALSTORAGE_NAME = 'user'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [roles, setRoles] = useState(null)

    const login = useCallback((jwtToken, id, roles) => {
        setToken(jwtToken)
        setUserId(id)
        setRoles(roles)
        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify({
            token: jwtToken,
            userId: id,
            roles: roles
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setRoles(null)
        localStorage.removeItem(LOCALSTORAGE_NAME)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME))

        if(data && data.token) {
            login(data.token, data.userId, data.roles)
        }
    }, [login])

    return {login, logout, token, userId, roles}
}