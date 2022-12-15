import { obtenerPersonajes } from '../../services/obtenerPersonaje'
import { Container, Image, Button, Form } from 'react-bootstrap'
import PaginacionPersonajes from '../../components/PaginacionPersonajes'
import { React, useRef, useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Personajes from '../../components/personajes/Personajes'


function Feed() {
  const [pagina, setPagina] = useState(1)
  const [personajes, setPersonajes] = useState()
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    obtenerPersonajes(setPersonajes, pagina, filtro)
  }, [pagina, filtro])

  if (!personajes) {
    //Componentizar?
    return <span><Spinner animation='border' />Cargando personajes</span> 
  } else {
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
        <Personajes personajes=personajes/>
      </Container>
    )
  }
}

export default Feed
