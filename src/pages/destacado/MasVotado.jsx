import { Container } from 'react-bootstrap'
import { Tabla } from '../../services/destacados/Tabla'
import { useTranslation } from 'react-i18next'
import { getDestacados } from '../../services/destacados/getDestacados'

function MasVotado() {
  const { t } = useTranslation()
  const { json, imagen } = getDestacados('destacado', 'get', undefined)

  return (
    <>
      <Container className='d-flex flex-column mb-5'>
        <p>{t('personaje-mas-votado')}</p>
        <Tabla imagen={imagen} destacados={json} />
      </Container>
    </>
  )
}

export default MasVotado
