import React from 'react'
import './personaje.css'
import { Image } from 'react-bootstrap'
import Valoraciones from '../valoraciones/Valoraciones'
import { useTranslation } from "react-i18next";

function Personaje(props) {
  console.log("hola", props)
  const { i18n } = useTranslation();
  const personaje = props.personaje
  return (
    <div className='contenedor_principal d-flex flex-column'>
      <div className='contenedor_imagen'>
        <Image
          className='imagen_personaje'
          src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
          alt={`${personaje.name} imagen`}
        />
      </div>
      <div className="contenedor_nombre_personaje">
        <p>{personaje.name} </p>
      </div>
      <div className="contenedor_valoraciones">
        <Valoraciones />
      </div>
      <div className="contenedor:descripcion">
        <p>{personaje.description[i18n.language]} </p>  
      </div>
      <div className="boton_personaje">
      <button type="button" className="boton_personaje"
      >Descubrelo</button>
      </div>
    </div>
  )
}

export default Personaje