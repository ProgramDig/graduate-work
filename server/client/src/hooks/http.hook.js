import {useCallback, useState} from "react";


export const useHttp = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            const response = await fetch(url, {method, body, headers})
            const data = response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Некоректна відповідь сервера.')
            }
            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = () => setError(null)

    return {loading, request, error, clearError}
}