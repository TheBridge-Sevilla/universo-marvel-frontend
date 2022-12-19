import React from 'react'
import './personaje.css'
import { Image } from 'react-bootstrap'
import Volver from '../Volver'
import BarraAvatar from '../Avatar'

function Personaje(props) {
  const personaje = props.personaje
  return (
    <div className='contenedor_principal'>
      <div className='d-flex flex-row justify-content-center'>
      <Volver/>
      <BarraAvatar/>
      </div>
      <div className='contenedor_imagen'>
        <Image
          className='imagen_personaje'
          src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
          alt={`${personaje.name} imagen`}
        />
      </div>
    </div>
  )
}

export default Personaje