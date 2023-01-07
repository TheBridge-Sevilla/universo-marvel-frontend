import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'
import { Tabla } from '../../services/destacados/Tabla'
import { getDestacados } from '../../services/destacados/getDestacados'

function Favorito() {
  const { t } = useTranslation()
  let idUsuario = 'y6dtb1y23oMn00AAFcgjdhSbbhi2' //prueba
  const { json, imagen } = getDestacados(
    'favoritos',
    'post',
    JSON.stringify({ idUsuario: idUsuario })
  )

  return (
    <Container className='d-flex flex-column mb-3'>
      <p>{t('personaje-favorito')}</p>
      <Tabla imagen={imagen} destacados={json} />
    </Container>
  )
}

export default Favorito
