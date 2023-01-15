import {useCallback, useEffect, useState} from "react";

const LOCALSTORAGE_NAME = 'user'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)
        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify({
            token,
            userId
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(LOCALSTORAGE_NAME)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME))

        if(data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])

    return {login, logout, token, userId}
}