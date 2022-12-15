import React from 'react'
import './personajes.css'
import { obtenerPersonajes } from '../../services/obtenerPersonaje'
import { Container, Image, Button } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowLeftShort } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'

function Personajes(props) {
  const personajes = props.personajes
  return (
    <Container >
      <div className='contenedor_iconos'>
      <span className='span_izquierda'> <BsArrowLeftShort /></span>
      <span className='span_derecha'> <FaRegUserCircle /></span>
      </div>
      <div className='contenedor_buscar'>
        <input type="text" placeholder='Buscar...'/>
      </div>
      <Container className='d-flex  flex-wrap' >

        {personajes.docs.map(personaje => (
          <Container id='contenedor_personaje'
            key={personaje.Id}
            className='d-flex flex-column justify-content-center text-white'
          >
            <Image
              className=''
              src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
              alt={`${personaje.name} imagen`}
            />
            <div>
              <div className='contenedor_nombre'>
                <p>{personaje.name}</p>
              </div>
              <div className='contenedor_valoracion'>
                <p><span><AiFillStar /></span> 4.9</p>
              </div>
            </div>

            {/*    <Button
            onClick={() =>
              window.open(
                personaje.urls.filter(obj => obj.type === 'detail')[0].url,
                '_blank'
              )
            }
          >
            Ver personaje en Marvel
          </Button> */}
          </Container>
        ))}
        <Button onClick={pasarPagina}> Pasar pagina</Button>
      </Container>
    </Container>
  )
}

export default Personajes