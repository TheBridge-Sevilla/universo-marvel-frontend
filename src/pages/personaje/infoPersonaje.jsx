import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import TopBar from '../../components/TopBar'
import { useEffect, useState } from 'react'

export default function InfoPersonaje(props) {
  const { t } = useTranslation()
  const comics = props.comics
  const personaje = props.personaje
  const [descripcion, setDescripcion] = useState('')

  useEffect(() => {
    if (personaje) {
      if (personaje.description.es != 'Sin descripción') {
        setDescripcion(personaje.description.es)
      }
    }
  }, [])

  return (
    <Container
      className='background-personaje d-flex flex-column justify-content-center align-items-center h-100'
      style={{
        backgroundImage: `url(${personaje.thumbnail.path}.${personaje.thumbnail.extension})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Container className='fixed-top'>
        <TopBar />
      </Container>
      <Container className='blur-container py-4'>
        {descripcion ? (
          <Typography className='descripcion-text'>{descripcion}</Typography>
        ) : (
          <></>
        )}
        <Swiper navigation={true} slidesPerView={2} modules={[Navigation]}>
          {comics.map(comic => (
            <SwiperSlide key={comic.id}>
              <Container className='d-flex'>
                <a
                  className='descripcion-text'
                  key={comic.id}
                  href={comic.urls[0].url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                    className='imagen-comic'
                  />
                  <p>{comic.title}</p>
                </a>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          onClick={e => {
            e.preventDefault()
            window.open(`${personaje.urls[0].url}`)
          }}
        >
          {t('ver-mas')}
        </Button>
      </Container>
    </Container>
  )
}
