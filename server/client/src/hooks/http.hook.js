import {useCallback, useState} from "react";


export const useHttp = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if(body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, {method, body, headers})
            const data = response.json()


            if (!response.ok) {
                console.log(data) // I't know this
                throw new Error(data.message || 'Невідома помилка.')
            }
            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null),[])

    return {loading, request, error, clearError}
}