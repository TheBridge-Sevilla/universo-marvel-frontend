import './Inicio.css'
import { Container, Image } from 'react-bootstrap'
import { Button } from '@mui/material'
import sesionInvitado from '../../services/firebase/sesionInvitado'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Inicio = () => {
  const { t } = useTranslation()
  const { inicioAnonimo } = sesionInvitado()

  return (
    <Container
      className='h-100 d-flex flex-column justify-content-around align-items-center m'
      fluid
    >
      <Image src='unio-icon.svg' alt='unio-icon' className='m-5 ' fluid />
      <Container className='d-flex flex-column  justify-content-flex-end m-5'>
        <Link className='navigation-button' to='iniciar-sesion'>
          <Button className='mb-5 aparecer-animacion' size='large'>
            {t('iniciar-sesion')}
          </Button>
        </Link>
        <Link className='navigation-button' to='dashboard'>
          <Button
            className='mb-5 aparecer-animacion'
            size='large'
            onClick={inicioAnonimo}
          >
            {t('sesion-invitado')}
          </Button>
        </Link>
      </Container>
      <h1 className='unio-text text-uppercase'>Unio</h1>
    </Container>
  )
}

export default Inicio
