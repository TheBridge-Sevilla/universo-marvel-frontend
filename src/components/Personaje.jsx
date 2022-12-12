import { useState, useEffect } from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import PaginacionPersonajes from './PaginacionPersonajes'

export default function Personaje() {
  const [pagina, setPagina] = useState(1)
  const [paginacion, setPaginacion] = useState({ limit: 10 })
  const [personajes, setPersonajes] = useState([])

  const url = `${
    import.meta.env.VITE_BASE_URL
  }/personajes?page=${pagina}&limit=${paginacion.limit}`

  async function fetchApi() {
    const data = await fetch(url)
    const json = await data.json()
    setPersonajes(json.docs)
    setPaginacion(json)
  }

  //console.log(paginacion)
  useEffect(() => {
    fetchApi(url).catch((error) => console.log(error))
  }, [pagina])

  return (
    <>
      {personajes.map((personaje) => (
        <Container
          key={personaje.Id}
          className="d-flex flex-column justify-content-center align-items-center"
          fluid
        >
          <PaginacionPersonajes
            setPagina={setPagina}
            pagina={pagina}
            setPaginacion={setPaginacion}
            paginacion={paginacion}
          />
          <Image
            className="vw-100"
            src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
            alt={`${personaje.name} imagen`}
          />
          <h1>{personaje.name}</h1>
          <Button
            onClick={() =>
              window.open(
                personaje.urls.filter((obj) => obj.type === 'detail')[0].url,
                '_blank'
              )
            }
          >
            Ver personaje en Marvel
          </Button>
        </Container>
      ))}
    </>
  )
}
