import { useTranslation } from 'react-i18next'
import { Card } from 'react-bootstrap'
import { fetchDestacados } from '../../services/destacados/fetchDestacados'
import { useContextoUsuario } from '../../context/contextoUsuario'
import { Carrusel } from '../../services/destacados/Carrusel'
import LockPersonIcon from '@mui/icons-material/LockPerson';

function Favorito() {
  const { t } = useTranslation()
  const { usuarioActual } = useContextoUsuario()
  let idUsuario = "y6dtb1y23oMn00AAFcgjdhSbbhi2"
  if(usuarioActual){
  idUsuario = usuarioActual.auth.currentUser.uid
}

  const { json } = fetchDestacados(
    'favoritos',
    'post',
    JSON.stringify({ idUsuario: idUsuario })
  )

  console.log(json)
  if (usuarioActual.displayName != null) {
    return (
      <>
        <p>{t('personaje-favorito')}</p>
        <Carrusel json={json} key='favoritos' />
      </>
    )
  } else
    return (
      <Card className='sin-favorito my-5'>
        <Card.Header>{t('personaje-favorito')}</Card.Header>
        <Card.Body>
        <LockPersonIcon className='m-5'  fontSize="large"/>
          <Card.Text>{t('solo-usuarios-registrados')}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Favorito
