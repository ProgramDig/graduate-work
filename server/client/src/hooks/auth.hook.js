import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {removeUser, setUser, setUsers} from "../redux/userSlice";

const LOCALSTORAGE_NAME = 'user'

export const useAuth = () => {
    const dispatch = useDispatch()

    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [role, setRole] = useState(null)

    const login = useCallback((jwtToken, user) => {
        setToken(jwtToken)
        setUserId(user._id)
        setRole(user.role)

        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify({
            token: jwtToken,
            user
        }))
        dispatch(setUser({...user}))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setRole(null)

        localStorage.removeItem(LOCALSTORAGE_NAME)
        dispatch(removeUser())
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME))

        if(data && data.token) {
            login(data.token, data.user)
        }
    }, [login])

    return {login, logout, token, userId, role}
}