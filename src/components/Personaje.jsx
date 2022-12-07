import { React, useState, useEffect } from "react"
import { Button, Container, Image } from "react-bootstrap"

export default function Personaje() {
    const [entidad, setEntidad] = useState('personajes')
    const [pagina, setPagina] = useState(1)
    const [limite, setLimite] = useState(2)
    const url = `${import.meta.env.VITE_BACKEND_URL}/${entidad}?page=${pagina}&limit=${limite}`

    const [error, setError] = useState(null)
    const [personajes, setPersonajes] = useState([])

    async function fetchApi() {
        const data = await fetch(url)
        const json = await data.json()
        setPersonajes(json.docs)
    }

    useEffect(() => {
        fetchApi().catch(error => setError(error))
    }, [pagina]);

    console.log(personajes, error)
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" fluid>
            {personajes.map(personaje =>
                <>
                    <Image
                        className="vw-100"
                        src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                        alt={personaje.name}
                    />
                    <h1>{personaje.name}</h1>
                    <Button
                        onClick={() => window.open(personaje.urls.filter(url => url.type === 'detail').url, '_blank')}>
                        Ver personaje
                    </Button>
                    <Button
                    onClick={() => window.open(personaje.urls[2].url, '_blank')}>
                        Ver comics
                    </Button>
                </>
            )}
        </Container>
    )
}

/* personaje.urls[0].url */