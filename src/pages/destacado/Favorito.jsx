import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'
import { Tabla } from '../../services/Tabla'

function Favorito() {
  const { t } = useTranslation()
  const url = `${import.meta.env.VITE_BASE_URL}/valoraciones/favoritos`
  const [favoritos, setFavoritos] = useState([])
  const [imagen, setImagen] = useState()
  let idUsuario = 'y6dtb1y23oMn00AAFcgjdhSbbhi2' //prueba
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idUsuario: idUsuario }),
    }
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(json => {
        setFavoritos(json)
        setImagen(json[0].imagen)
      })
  }, [])

  return (
    <Container className='d-flex flex-column'>
      <p>{t('personaje-favorito')}</p>
      <Tabla imagen={imagen} destacados={favoritos} />
    </Container>
  )
}

export default Favorito
