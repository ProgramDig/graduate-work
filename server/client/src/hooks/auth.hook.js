import {useCallback, useEffect, useState} from "react";

const LOCALSTORAGE_NAME = 'user'

export const useAuth = () => {

    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [role, setRole] = useState(null)

    const login = useCallback((jwtToken, id, role) => {
        setToken(jwtToken)
        setUserId(id)
        setRole(role)

        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify({
            token: jwtToken,
            userId: id,
            role: role // BAD PRACTICE
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setRole(null)

        localStorage.removeItem(LOCALSTORAGE_NAME)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME))

        if(data && data.token) {
            login(data.token, data.userId, data.role)
        }
    }, [login])

    return {login, logout, token, userId, role}
}