import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import { Rating } from '@mui/material'
import { responsive } from '../responsive'

export function Carrusel({ json }) {
  return (
    <Container className='d-flex flex-column mb-3'>
      <Carousel
        responsive={responsive}
        showDots={false}
        swipeable={true}
        className='m-2'
      >
        {json.map(comic => (
          <>
            <img
              src={`${comic.imagen}`}
              alt={comic.personaje}
              className='imagen-ranking'
              key={comic.personaje}
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
}
