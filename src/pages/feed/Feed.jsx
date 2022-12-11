import React from 'react'
import { obtenerPersonajes } from '../../services/obtenerPersonaje'
import { Container, Image, Button } from 'react-bootstrap'

function Feed() {
  const { personajesData, pagina, setPagina } = obtenerPersonajes()
  const pasarPagina = (e) => {
    e.preventDefault()
    setPagina(pagina + 1)
  }

  return (
    <Container>
      {personajesData.map((personaje) => (
        <Container
          key={personaje.Id}
          className="d-flex flex-column justify-content-center align-items-center"
          fluid
        >
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
      <Button onClick={pasarPagina}> Pasar pagina</Button>
    </Container>
  )
}

export default Feed
