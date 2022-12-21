import React, { useState, useEffect } from 'react'
import './personaje.css'
import { Image } from 'react-bootstrap'
import { Rating, Box, Typography } from '@mui/material'
import { auth } from '../../services/firebase/firebase'
import Volver from '../Volver'
import BarraAvatar from '../Avatar'
import { useContextoUsuario } from '../../context/contextoUsuario'


function Personaje() {
  const { personajeSeleccionado } = useContextoUsuario()
  const personaje = personajeSeleccionado
  const valoracion = personajeSeleccionado.valoracion
  const [valoracionPersonal, setValoracionPersonal] = useState(0)
  useEffect(() => {
    const url = `${import.meta.env.VITE_BASE_URL}/valoraciones?idPersonaje=${personaje._id
      }&idUsuario=${auth.currentUser.uid}`
    fetch(url, { cache: "no-store" })
      .then(data => data.json())
      .then(json => { setValoracionPersonal(json); console.log(json) })
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

  return (
    <div className='contenedor_principal'>
      <Volver />
      <BarraAvatar />
      <div className='d-flex flex-row justify-content-center'>
      </div>
      <div className='contenedor_imagen'>
        <Image
          className='imagen_personaje'
          src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
          alt={`${personaje.name} imagen`}
        />
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
      </div>
    </div>
  )
}

export default Personaje
