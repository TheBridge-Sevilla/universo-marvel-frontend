import { useState, useEffect } from 'react'
import './personajes.css'
import { Container, Image } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import Spinner from 'react-bootstrap/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import Navbar from '../../components/Navbar'
import TopBar from '../../components/TopBar'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Carga from '../intro/Carga'
import { Link } from 'react-router-dom'
import Subir from '../../components/Subir'
import { useTranslation } from 'react-i18next'
import { TextField } from '@mui/material'
import { Search } from 'react-bootstrap-icons'
import { usePersonajes } from '../../hooks/usePersonajes'
import { useContextoUsuario } from '../../context/contextoUsuario'

function Personajes() {
  const { t } = useTranslation()
  const [pagina, setPagina] = useState(1)
  const [filtro, setFiltro] = useState()
  const { personajesData, filtradosData, valoracionesData } = usePersonajes(
    pagina,
    filtro
  )
  const [personajes, setPersonajes] = useState()
  const [valoraciones, setValoraciones] = useState()
  const { setIsIndice } = useContextoUsuario()

  const siguientePaginaPersonajes = () => {
    setPagina(pagina + 1)
  }

  const filtrarPersonajes = e => {
    setPagina(1)
    setFiltro(e.target.value)
  }

  useEffect(() => {
    if (personajesData && (!filtradosData || filtradosData === '')) {
      setPersonajes(personajesData.docs)
      setValoraciones(valoracionesData)
      if (personajes) {
        setPersonajes(personajes.concat(personajesData.docs))
        setValoraciones(valoraciones.concat(valoracionesData))
      }
    } else if (filtradosData && filtradosData != '') {
      setPersonajes(filtradosData.docs)
      setValoraciones(valoracionesData)
    }
  }, [personajesData, filtradosData])

  if (!personajes) {
    //Componentizar?
    return <Carga />
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
          transition={{ duration: 0.2 }}
          exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
          className='min-vh-100'
        >
          <TopBar />
          <Container className='my-4'>
            <TextField
              onChange={filtrarPersonajes}
              fullWidth={true}
              label={<Search />}
              placeholder={t('busqueda')}
            />
          </Container>
          <InfiniteScroll
            className='contenedor_scroll mb-5'
            dataLength={personajes.length}
            hasMore={pagina < personajesData.totalPages}
            next={siguientePaginaPersonajes}
            loader={
              <span>
                <Spinner animation='border' />
                {t('cargando')}
              </span>
            }
          >
            {personajes.map((personaje, i) => (
              <Container
                id=''
                className='contenedor_personajes'
                key={i}
                onClick={() => {
                  setIsIndice(i)
                }}
              >
                <Link
                  to={`/personaje/${personaje.name
                    .split(' ')[0]
                    .toLowerCase()}`}
                  state={{
                    personajes: personajes,
                    valoraciones: valoraciones,
                    personaje: personaje,
                    index: i,
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
                        {valoraciones[i]
                          ? valoraciones[i].toFixed(1)
                          : 'Non rated'}
                      </p>
                    </div>
                  </div>
                </Link>
              </Container>
            ))}
          </InfiniteScroll>
          <Subir />
          <Navbar />
        </m.div>
      </LazyMotion>
    )
  }
}
export default Personajes
