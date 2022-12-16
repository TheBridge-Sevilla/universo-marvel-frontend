import { obtenerPersonajes } from '../../services/obtenerPersonaje'
import { Container, Image, Button, Form } from 'react-bootstrap'
import PaginacionPersonajes from '../../components/PaginacionPersonajes'
import { React, useRef, useState, useEffect } from 'react'
import Personajes from '../../components/personajes/Personajes'

function Feed() {
  const [filtro, setFiltro] = useState('')

  return (
    <Container>
      {/* Mejor en un componente */}
      <Form className='h-100 d-flex flex-column justify-content-center'>
        <Form.Control
          type='text'
          size='lg'
          placeholder='Filtro'
          onChange={event => {
            setFiltro(event.target.value)
          }}
        />
      </Form>
      <Personajes filtro={filtro} />
    </Container>
  )
}

export default Feed
