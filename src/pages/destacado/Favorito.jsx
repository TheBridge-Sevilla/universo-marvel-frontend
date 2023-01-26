import { useTranslation } from 'react-i18next'
import { Card } from 'react-bootstrap'
import { fetchDestacados } from '../../services/destacados/fetchDestacados'
import { Carrusel } from '../../services/destacados/Carrusel'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import { auth } from '../../services/firebase/firebase'

function Favorito() {
  const { t } = useTranslation()
  let idUsuario = auth.currentUser.uid

  const { json } = fetchDestacados(
    'favoritos',
    'post',
    JSON.stringify({ idUsuario: idUsuario })
  )

  if (auth.currentUser.displayName != null) {
    return (
      <>
        <p className='enunciado-personaje'>{t('personaje-favorito')}</p>
        <Carrusel personajes={json} />
      </>
    )
  } else
    return (
      <Card className='sin-favorito my-5'>
        <Card.Header>{t('personaje-favorito')}</Card.Header>
        <Card.Body>
          <LockPersonIcon className='m-5' fontSize='large' />
          <Card.Text>{t('solo-usuarios-registrados')}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Favorito
