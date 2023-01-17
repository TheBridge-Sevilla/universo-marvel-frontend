import { useState, useEffect } from 'react'
import './personaje.css'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Image, Alert, Container, Modal } from 'react-bootstrap'
import { Rating, Typography, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css'
import { useContextoAlert } from '../../context/contextoAlert'
import { useTranslation } from 'react-i18next'
import DescripcionPersonaje from './descripcionPersonaje'
import TopBar from '../../components/TopBar'
import Comentarios from './Comentarios'
import Navbar from './../../components/Navbar'
import { useLocation } from 'react-router-dom'
import { useValoracionPersonal } from '../../hooks/useValoracionPersonal'
import { getComics } from '../../services/personaje/getComics'

function Personaje() {
  const { t } = useTranslation()
  const location = useLocation()
  const personajes = location.state.personajes
  const valoraciones = location.state.valoraciones
  const personaje = location.state.personaje
  const [indiceActual, setIndiceActual] = useState(location.state.index)
  const valoracion = valoraciones[indiceActual]
  const { tuValoracion, postValoracion } = useValoracionPersonal(personaje)
  const [valoracionPersonal, setValoracionPersonal] = useState(0)
  const indiceAnterior = indiceActual - 1
  const indiceSiguiente = indiceActual + 1
  const personajeAnterior = personajes[indiceAnterior]
  const personajeSiguiente = personajes[indiceSiguiente]
  const { notificacion } = useContextoAlert()
  const comics = getComics(personaje)
  const [mostrarInfo, setMostrarInfo] = useState(false)
  const [modalBackground, setModalBackground] = useState()
  const [mostrarComentarios, setMostrarComentarios] = useState(false)
  document.body.style.background = modalBackground

  const handleValoracion = valoracion => {
    postValoracion(valoracion)
    setValoracionPersonal(valoracion)
    notificacion(`${t('voto-realizado')}`, 'success')
  }

  useEffect(() => {
    if (tuValoracion) {
      setValoracionPersonal(tuValoracion)
    }
  }, [tuValoracion])

  const siguientePersonaje = () => {
    setIndiceActual(indiceActual + 1)
  }

  const anteriorPersonaje = () => {
    setIndiceActual(indiceActual - 1)
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        }}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.1 }}
        className='min-vh-100'
      >
        <TopBar />
        <Container className='d-flex flex-row align-items-center justify-content-between mt-5'>
          {indiceActual > 0 ? (
            <Link
              to={`/personaje/${personajeAnterior.name
                .split(' ')[0]
                .toLowerCase()}`}
            >
              <ArrowBackIosNewIcon
                className='flecha'
                onClick={() => anteriorPersonaje()}
              />
            </Link>
          ) : (
            <ArrowBackIosNewIcon className='flecha' />
          )}
          <Image
            className='imagen_personaje'
            src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
            alt={`${personaje.name} imagen`}
          />
          <Link
            to={`/personaje/${personajeSiguiente.name
              .split(' ')[0]
              .toLowerCase()}`}
          >
            <ArrowForwardIosIcon
              className='flecha'
              onClick={() => siguientePersonaje()}
            />
          </Link>
        </Container>
        <Container className='contenedor_nombre_personaje'>
          <h4 className='titulo mb-3'>{personaje.name}</h4>
        </Container>
        <Container>
          <Typography component='legend'>{t('valoracion-personal')}</Typography>
          <Rating
            name='simple-controlled'
            value={valoracionPersonal}
            onChange={(event, newValue) => handleValoracion(newValue)}
          />
        </Container>
        <br />
        <Typography>{t('valoracion-global')}</Typography>
        <Container className='d-flex flex-column justify-content-center align-items-center'>
          {valoracion ? (
            <Rating
              name='half-rating-read'
              defaultValue={valoracion}
              precision={0.5}
              readOnly
              key={valoracion}
            />
          ) : (
            <Container className='my-2'>
              <Alert key='error' severity='info'>
                {t('por-valorar')}
              </Alert>
            </Container>
          )}
        </Container>
        <Container className='d-flex flex-column justify-content-center mt-5'>
          <Button
            className='my-1 mx-3'
            onClick={() => {
              setMostrarInfo(true)
              setModalBackground(
                `${personaje.path}.${personaje.thumbnail.extension}`
              )
            }}
            size='large'
          >
            {t('mostrar-info')}
          </Button>
          <Button
            className='my-2 mx-3'
            onClick={() => setMostrarComentarios(true)}
          >
            {t('ver-comentarios')}
          </Button>
        </Container>
        <Modal
          fullscreen={true}
          show={mostrarInfo}
          onHide={() => setMostrarInfo(false)}
        >
          <DescripcionPersonaje comics={comics} personaje={personaje} />
        </Modal>
        <Modal
          fullscreen={true}
          show={mostrarComentarios}
          onHide={() => setMostrarComentarios(false)}
          className='modal-comentarios'
        >
          <Comentarios personaje={personaje} />
        </Modal>
        <Navbar />
      </m.div>
    </LazyMotion>
  )
}

export default Personaje
