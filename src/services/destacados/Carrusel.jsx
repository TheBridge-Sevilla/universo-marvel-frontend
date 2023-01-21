import { Container, Image } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Rating } from '@mui/material'
import 'swiper/css'
import 'swiper/css/navigation'

export function Carrusel({personajes}) {

  return (
    <Swiper
      navigation={true}
      slidesPerView={1}
      modules={[Navigation]}
      className='slider-destacados'
    >
      {personajes.map(personaje => (
        <SwiperSlide key={personaje.personaje}>
          <Container className='d-flex flex-column justify-content-center align-items-center'>
            <Image
              className='img-thumbnail'
              src={personaje.imagen}
              alt={personaje.personaje}
              key={personaje.personaje}
              fluid
            />
            <p className='nombre-personaje'>{personaje.personaje}</p>
            <Rating
              name='half-rating-read'
              defaultValue={personaje.valoracion}
              precision={0.5}
              readOnly
              key={personaje.valoracion}
            />
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
