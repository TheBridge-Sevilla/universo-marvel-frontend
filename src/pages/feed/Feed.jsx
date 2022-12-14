import { obtenerPersonajes } from '../../services/obtenerPersonaje'
import { Container, Image, Button, Form } from 'react-bootstrap'
import PaginacionPersonajes from '../../components/PaginacionPersonajes'
import { React, useRef, useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'

function Feed() {
  const [pagina, setPagina] = useState(1)
  const [personajes, setPersonajes] = useState()
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    console.log('filtro', filtro)
    obtenerPersonajes(setPersonajes, pagina, filtro)
  }, [pagina, filtro])

  if (!personajes) {
    //Componentizar?
    return <span><Spinner animation='border' />Cargando personajes</span> 
  } else {
    console.log('personajes', personajes)
    return (
      <Container>
        <PaginacionPersonajes
          personajes={personajes}
          pagina={pagina}
          setPagina={setPagina}
        />
        {/* Mejor en un componente */}
        <Form className='h-100 d-flex flex-column justify-content-center'>
          <Form.Control
            type='text'
            size='lg'
            placeholder='Filtro'
            onChange={event => {
              setFiltro(event.target.value)
              setPagina(1)
            }}
          />
        </Form>

        {/****************************/}
        <Container className='d-flex justify-content-center align-items-center flex-column p-1'>
          {personajes.docs.map(personaje => (
            <Container
              key={personaje.Id}
              className='d-flex flex-column'
            >
              <Image
                className='w-100'
                src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                alt={`${personaje.name} imagen`}
              />
              <h1>{personaje.name}</h1>
              <Button
                onClick={() =>
                  window.open(
                    personaje.urls.filter(obj => obj.type === 'detail')[0].url,
                    '_blank'
                  )
                }
              >
                Ver personaje en Marvel
              </Button>
            </Container>
          ))}
        </Container>
      </Container>
    )
  }
}

export default Feed
