import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { getDestacados } from '../../services/destacados/getDestacados'
import { Rating } from '@mui/material'
import Carousel from 'react-multi-carousel'

function MasVotado(props) {
  const { t } = useTranslation()
  const { json } = getDestacados('destacado', 'get', undefined)

  return (
    <>
      <Container className='d-flex flex-column mb-5'>
        <p>{t('personaje-mas-votado')}</p>
        <Carousel
        responsive={props.responsive}
        showDots={false}
        swipeable={true}
        className='m-2'
      >
        {json.map(comic => (
          <>
            <img
              src={`${comic.imagen}`}
              alt={comic.personaje}
              className='imagen-comic'
            />
            <p>{comic.personaje}</p>
            <Rating
            name='half-rating-read'
            defaultValue={comic.valoracion}
            precision={0.5}
            readOnly
            key={comic.valoracion}
          />
          </>
        ))}
      </Carousel>
      </Container>
    </>
  )
}

export default MasVotado
