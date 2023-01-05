import { Container, Modal } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import Comentarios from '../../components/Comentarios'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Comentar from '../../services/formComentario'

export default function DescripcionPersonaje(props) {
  const { t } = useTranslation()
  const responsive = props.responsive
  const comics = props.comics
  const personaje = props.personaje
  const [comicsVisibles, setComicsVisibles] = useState(false)
  const [comentarVisible, setComentarVisible] = useState(false)

  return (
    <Container>
      <Comentarios />
      <Button onClick={() => setComentarVisible(true)}>{t('comentar')}</Button>
      <Modal
        show={comentarVisible}
        onHide={() => setComentarVisible(false)}
        centered
      >
        <Comentar />
      </Modal>
      <Button onClick={() => setComicsVisibles(true)} className='mx-1'>
        Mostrar comics
      </Button>
      <Modal
        show={comicsVisibles}
        onHide={() => setComicsVisibles(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Comics</Modal.Title>
        </Modal.Header>
        <Carousel
          responsive={responsive}
          showDots={false}
          swipeable={true}
          className='m-2'
        >
          {comics.map(comic => (
            <a
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
      </Modal>
      <Button
        onClick={e => {
          e.preventDefault()
          window.open(`${personaje.urls[0].url}`)
        }}
        className=''
      >
        {t('ver-mas')}
      </Button>
    </Container>
  )
}
