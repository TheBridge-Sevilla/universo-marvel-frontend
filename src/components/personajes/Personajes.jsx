import React, { useState, useEffect } from 'react'
import './personajes.css'
import { obtenerPersonajes } from '../../services/obtenerPersonaje'
import { Container, Image, Button } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowLeftShort } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
import Spinner from 'react-bootstrap/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

const style = {
  height: 30,
  border: '1px solid green',
  margin: 6,
  padding: 8,
}

function Personajes(props) {
  const [personajes, setPersonajes] = useState()
  const [pagina, setPagina] = useState(1)

  useEffect(() => {
    const url = `${
      import.meta.env.VITE_BASE_URL
    }/personajes?page=${pagina}&limit=${
      import.meta.env.VITE_PAGINATION_LIMIT
    }&filter=${props.filtro}`
    fetch(url)
      .then(data => data.json())
      .then(json => setPersonajes(json))
    setPagina(1)
  }, [props.filtro])

  function siguientePaginaPersonajes() {
    const url = `${import.meta.env.VITE_BASE_URL}/personajes?page=${
      pagina + 1
    }&limit=${import.meta.env.VITE_PAGINATION_LIMIT}&filter=${props.filtro}`

    setPagina(pagina + 1)
    fetch(url)
      .then(data => data.json())
      .then(json => {
        console.log(personajes)
        let nuevosPersonajes = json
        nuevosPersonajes.docs = personajes.docs.concat(json.docs)
        setPersonajes(nuevosPersonajes)
      })
  }

  if (!personajes) {
    //Componentizar?
    return (
      <span>
        <Spinner animation='border' />
        Cargando personajes
      </span>
    )
  } else {
    return (
        <InfiniteScroll
          dataLength={personajes.docs.length}
          hasMore={pagina < personajes.totalPages}
          next={siguientePaginaPersonajes}
          loader={
            <span>
              <Spinner animation='border' />
              Cargando personajes
            </span>
          }
        >
          {personajes.docs.map(personaje => (
            <Container
              id='contenedor_personaje'
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
                  <p>
                    <span>
                      <AiFillStar />
                    </span>{' '}
                    4.9
                  </p>
                </div>
              </div>
            </Container>
          ))}
        </InfiniteScroll>
        
    )
  }
}
export default Personajes
