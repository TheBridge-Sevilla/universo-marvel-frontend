import { useTranslation } from 'react-i18next'
import { Card, Container } from 'react-bootstrap'
import { getDestacados } from '../../services/destacados/getDestacados'
import Carousel from 'react-multi-carousel'
import { Rating } from '@mui/material'
import { useContextoUsuario } from '../../context/contextoUsuario'

function Favorito(props) {
  const { t } = useTranslation()
  const { usuarioActual } = useContextoUsuario()

  let idUsuario = usuarioActual.auth.currentUser.uid

  const { json } = getDestacados(
    'favoritos',
    'post',
    JSON.stringify({ idUsuario: idUsuario })
  )

  console.log(usuarioActual)
  if (usuarioActual.displayName != null) {
    return (
      <Container className='d-flex flex-column mb-3'>
        <p>{t('personaje-favorito')}</p>
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
    )
  } else
    return (
      <Card className='sin-favorito my-5'>
        <Card.Header>{t('personaje-favorito')}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>{t('solo-usuarios-registrados')}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Favorito
