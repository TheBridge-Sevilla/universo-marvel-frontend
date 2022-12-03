import { useState, useEffect } from "react"

export function useApi(entidad) {
    const url = `${import.meta.env.VITE_BACKEND_URL}/${entidad}`
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [api, setApi] = useState()

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setApi(json)
            })
            .catch((error) => {
                setError('Ha ocurrido un error')
                console.log(error)
            })
    }, []);


    return { loading, api, error }
}