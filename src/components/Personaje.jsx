import { React, useState, useEffect } from "react"

export default function Personaje() {
    const [entidad, setEntidad] = useState('personajes')
    const [pagina, setPagina] = useState(1)
    const [limite, setLimite] = useState(2)
    const url = `${import.meta.env.VITE_BACKEND_URL}/${entidad}?page=${pagina}&limit=${limite}`

    const [error, setError] = useState(null)
    const [personajes, setPersonajes] = useState([])

    async function fetchJson() {
        const data = await fetch(url)
        const json = await data.json()
        setPersonajes(json.docs)
    }

    useEffect(() => {
        fetchJson().catch(error => setError(error))
    }, [pagina]);

    console.log(personajes, error)
    return (
        <div>
            {personajes.map(personaje =>
                <p key={personaje.Id}>
                    {personaje.name}
                </p>
            )}
        </div>
    )
}