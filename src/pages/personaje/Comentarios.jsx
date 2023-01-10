import { useTranslation } from 'react-i18next'
import { Container, Card } from 'react-bootstrap'
import Comentar from '../../components/comentarios/FormComentario'
import TopBar from '../../components/TopBar'
import { getComentarios } from '../../services/personaje/getComentarios'

export default function Comentarios(props) {
  const { t } = useTranslation()
  const personaje = props.personaje
  const { json } = getComentarios(personaje)

  return (
    <Container>
      <Container className='mb-4'>
        <TopBar personaje={personaje} />
      </Container>
      <h4 className='d-flex align-self-start mb-5 mx-3'>{t('comentarios')}</h4>
      {json.length != 0 ? (
        json.map(comentario => (
          <Card
            className='card-comentario my-3 mx-1 py-1 text-left'
            key={comentario._id}
          >
            <Card.Header className='texto-comentario'>
              {comentario.autor}
            </Card.Header>
            <Card.Body>
              <Card.Text className='texto-comentario'>
                {comentario.comentario}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>{t('primer-comentario')}</p>
      )}
      <Comentar personaje={personaje} />
    </Container>
  )
}
