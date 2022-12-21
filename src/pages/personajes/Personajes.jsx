import { useState, useEffect } from 'react'
import './personajes.css'
import { Container, Image, Form } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import Spinner from 'react-bootstrap/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import Personaje from '../../components/personaje/Personaje'
import Navbar from '../../components/navbar/Navbar'
import Volver from '../../components/Volver'
import BarraAvatar from '../../components/Avatar'
import { LazyMotion, domAnimation, m } from 'framer-motion'


function Personajes() {
  const [personajes, setPersonajes] = useState()
  const [pagina, setPagina] = useState(1)
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(false)
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    const url = `${
      import.meta.env.VITE_BASE_URL
    }/personajes?page=${pagina}&limit=${
      import.meta.env.VITE_PAGINATION_LIMIT
    }&filter=${filtro}`
    fetch(url)
      .then(data => data.json())
      .then(json => setPersonajes(json))
    setPagina(1)
  }, [filtro])

  function siguientePaginaPersonajes() {
    const url = `${import.meta.env.VITE_BASE_URL}/personajes?page=${
      pagina + 1
    }&limit=${import.meta.env.VITE_PAGINATION_LIMIT}&filter=${filtro}`

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

  if (personajeSeleccionado) {
    return <Personaje personaje={personajeSeleccionado} />
  }

  if (!personajes) {
    //Componentizar?
    return (
      <span className='h-100 d-flex justify-content-center align-items-center'>
        <Spinner animation='border' />
        Cargando personajes
      </span>
    )
  } else {
    return (

      <LazyMotion features={domAnimation}>
        <m.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            delay: 1,
          }}
          transition={{ duration: 0.5 }}

        >
      <div className='d-flex justify-content-between m-4'>
       <Volver/>
       <BarraAvatar/>

      </div>

          {' '}
          <Container className='my-4'>
            <Form.Control
              type='text'
              size='lg'
              placeholder='Filtro'
              onChange={event => {
                setFiltro(event.target.value)
              }}
            />
          </Container>
          <InfiniteScroll
            className='contenedor_scroll d-flex flex-wrap mt-4'
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
            {personajes.docs.map((personaje, i) => (
              <Container
                id='contenedor_personajes'
                className='d-flex flex-column justify-content-center text-white'
                key={i}
                onClick={() => {
                  setPersonajeSeleccionado(personaje)
                }}
              >
                <Image
                  className='imagen_personajes'
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
      <Navbar/> 
        </m.div>
      </LazyMotion>
    )
  }
}
export default Personajes
