import React from 'react'
import './personaje.css'
import { Image } from 'react-bootstrap'

function Personaje(props) {
  const personaje = props.personaje
  return (
    <div className='contenedor_principal'>
      <div className='contenedor_imagen'>
        <Image
          className=''
          src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
          alt={`${personaje.name} imagen`}
        />
      </div>
    </div>
  )
}

export default Personaje