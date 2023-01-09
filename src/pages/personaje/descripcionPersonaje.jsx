import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import { Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import TopBar from '../../components/TopBar'
import { useEffect, useState } from 'react'
import { responsive } from '../../services/responsive'

export default function DescripcionPersonaje(props) {
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
      className=' background-personaje d-flex flex-column justify-content-center align-items-center h-100'
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
        <Carousel
          responsive={responsive}
          showDots={false}
          swipeable={true}
          className='m-2'
        >
          {comics.map(comic => (
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
          ))}
        </Carousel>
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
