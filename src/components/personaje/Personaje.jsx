import { useState, useEffect } from 'react'
import './personaje.css'
import { Image } from 'react-bootstrap'
import { Rating, Box, Typography } from '@mui/material'
import { auth } from '../../services/firebase/firebase'
import BarraAvatar from '../Avatar'
import { useContextoUsuario } from '../../context/contextoUsuario'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Personaje() {
  const { personajes, valoraciones, isIndice, setIsIndice } = useContextoUsuario()
  const personaje = personajes.docs[isIndice]
  const valoracion = valoraciones[isIndice]
  const [valoracionPersonal, setValoracionPersonal] = useState(0)
  const indiceAnterior = isIndice - 1;
  const indiceSiguiente = isIndice + 1;
  const personajeAnterior = personajes.docs[indiceAnterior]
  const personajeSiguiente = personajes.docs[indiceSiguiente]
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${import.meta.env.VITE_BASE_URL}/valoraciones?idPersonaje=${personaje._id
      }&idUsuario=${auth.currentUser.uid}`
    fetch(url, { cache: "no-store" })
      .then(data => data.json())
      .then(json => { setValoracionPersonal(json) })
  }, [])

  function emitirValoracion(valoracion) {
    const url = `${import.meta.env.VITE_BASE_URL}/valoraciones?personaje=${personaje.name
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
    })
      .then(res => res.json())
      .then(json => {
        setValoracionPersonal(valoracion)
      })
  }

  const siguientePersonaje = () => {
    setIsIndice(isIndice + 1)
  }

  const anteriorPersonaje = () => {
    setIsIndice(isIndice - 1);

  }

  return (
    <>
      <div className='d-flex flex-row justify-content-between m-4'>
        <Nav  >
          <ArrowBackIcon className='flecha-volver' fontSize='large' onClick={() => navigate("/dashboard")} />
        </Nav>
        <BarraAvatar />
      </div>
      <div className='d-flex flex-row align-items-center justify-content-between '>

        {isIndice > 0 ?
          <Link to={`/personaje/${personajeAnterior.name.split(' ')[0].toLowerCase()}`}><ArrowBackIosNewIcon className='flecha' onClick={() => anteriorPersonaje()} ontSize='large' /></Link>
          : <ArrowBackIosNewIcon className='flecha' fontSize='large' />}
        <Image
          className='imagen_personaje'
          src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
          alt={`${personaje.name} imagen`}
        />
        <Link to={`/personaje/${personajeSiguiente.name.split(' ')[0].toLowerCase()}`}><ArrowForwardIosIcon className='flecha' onClick={() => siguientePersonaje()} ontSize='large' /></Link>
      </div>
      <div className="contenedor_nombre_personaje">
        <h5>{personaje.name}</h5>
      </div>

      <div>
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Typography component='legend'>Tu valoración</Typography>
          <Rating
            name='simple-controlled'
            value={valoracionPersonal}
            onChange={(event, newValue) => {
              emitirValoracion(newValue)
            }}
          />
        </Box>
      </div>
      <br />
      Valoracion global :
      {valoracion ? (
        <Rating
          name='half-rating-read'
          defaultValue={valoracion}
          precision={0.5}
          readOnly
        />
      ) : (
        ' por valorar'
      )}

      <button type="button" className="boton_personaje"
        onClick={(e) => {
          e.preventDefault();
          window.open(`${personaje.urls[0].url}`);
        }}
      > DESCÚBRELO</button>



    </>
  )
}

export default Personaje
