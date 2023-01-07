import { useState, useEffect } from 'react'
import './personaje.css'
import { Image, Alert, Container, Modal } from 'react-bootstrap'
import { Rating, Typography, Button } from '@mui/material'
import { auth } from '../../services/firebase/firebase'
import TopBar from '../../components/TopBar'
import { useContextoUsuario } from '../../context/contextoUsuario'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css'
import { MD5 } from 'crypto-js'
import { useContextoAlert } from '../../context/contextoAlert'
import { useTranslation } from 'react-i18next'
import DescripcionPersonaje from './descripcionPersonaje'

function Personaje() {
  const { t } = useTranslation()
  const { personajes, valoraciones, isIndice, setIsIndice } =
    useContextoUsuario()
  const personaje = personajes.docs[isIndice]
  const valoracion = valoraciones[isIndice]
  const [valoracionPersonal, setValoracionPersonal] = useState(0)
  const indiceAnterior = isIndice - 1
  const indiceSiguiente = isIndice + 1
  const personajeAnterior = personajes.docs[indiceAnterior]
  const personajeSiguiente = personajes.docs[indiceSiguiente]
  const apikey = import.meta.env.VITE_MARVEL_KEY
  const timestamp = Date.now()
  const privateKey = import.meta.env.VITE_PRIVATE_KEY
  const publicKey = import.meta.env.VITE_PUBLIC_KEY
  const hash = MD5(`${timestamp}${privateKey}${publicKey}`)
  const personajeID = personaje.Id
  const { notificacion } = useContextoAlert()

  const [comics, setComics] = useState([])
  const [mostrarInfo, setMostrarInfo] = useState(false)

  useEffect(() => {
    console.log(personaje.Id)
    const url = `${import.meta.env.VITE_BASE_URL}/valoraciones?idPersonaje=${
      personaje._id
    }&idUsuario=${auth.currentUser.uid}`
    fetch(url, { cache: 'no-store' })
      .then(data => data.json())
      .then(json => {
        setValoracionPersonal(json)
      })
  }, [])

  function emitirValoracion(valoracion) {
    const url = `${import.meta.env.VITE_BASE_URL}/valoraciones?personaje=${
      personaje.name
    }`

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idUsuario: auth.currentUser != null ? auth.currentUser.uid : undefined,
        valoracion: valoracion, //id del usuario Firebase
        idPersonaje: personaje._id,
      }),
    }).then(setValoracionPersonal(valoracion))
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters/${personajeID}/comics?apikey=${apikey}&ts=${timestamp}&hash=${hash}`
        )
        const data = await response.json()
        setComics(data.data.results)
      } catch (error) {
        notificacion(error, 'error')
      }
    }
    fetchData()
  }, [])

  const siguientePersonaje = () => {
    setIsIndice(isIndice + 1)
  }

  const anteriorPersonaje = () => {
    setIsIndice(isIndice - 1)
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }

  return (
    <>
      <TopBar />
      <Container className='d-flex flex-row align-items-center justify-content-between '>
        {isIndice > 0 ? (
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
        <h5>{personaje.name}</h5>
      </Container>
      <Container>
        <Typography component='legend'>{t('valoracion-personal')}</Typography>
        <Rating
          name='simple-controlled'
          value={valoracionPersonal}
          onChange={(event, newValue) => {
            emitirValoracion(newValue)
            notificacion(`${t('voto-realizado')}`, 'success')
          }}
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
        <Button
          onClick={() => setMostrarInfo(true)}
          className='mt-5'
          size='large'
        >
          {t('mostrar-info')}
        </Button>
      </Container>
      <Modal
        fullscreen={true}
        show={mostrarInfo}
        onHide={() => setMostrarInfo(false)}
      >
        <Modal.Header closeButton />
        <DescripcionPersonaje
          responsive={responsive}
          comics={comics}
          personaje={personaje}
        />
      </Modal>
    </>
  )
}

export default Personaje