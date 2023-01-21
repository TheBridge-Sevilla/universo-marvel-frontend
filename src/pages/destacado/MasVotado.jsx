import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'
import 'swiper/css'
import 'swiper/css/navigation'
import { Carrusel } from '../../services/destacados/Carrusel'

function MasVotado(props) {
  const { t } = useTranslation()
  const personajes = props.json

  return (
    <Container>
      <p className='enunciado-personaje'>{t('personaje-votado')}</p>
      <Carrusel personajes={personajes} />
    </Container>
  )
}

export default MasVotado
