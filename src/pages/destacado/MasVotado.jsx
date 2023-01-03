import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Tabla } from '../../services/Tabla'
import { useTranslation } from 'react-i18next'


function MasVotado() {
  const { t } = useTranslation()
  const url = `${import.meta.env.VITE_BASE_URL}/valoraciones/destacado`
  const [masVotados, setMasVotados] = useState([])
  const [imagen, setImagen] = useState()
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(json => {
        setMasVotados(json)
        setImagen(json[0].imagen)
      })
  }, [])

  return (
    <>
      <Container className='d-flex flex-column mb-5'>
        <p>{t('personaje-mas-votado')}</p>
        <Tabla imagen={imagen} destacados={masVotados} />
      </Container>
    </>
  )
}

export default MasVotado
