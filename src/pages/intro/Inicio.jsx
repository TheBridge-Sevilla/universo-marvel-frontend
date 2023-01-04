import './Inicio.css'
import { Container, Image } from 'react-bootstrap'
import { Button } from '@mui/material'
import useSignLikeGuest from '../../hooks/useSignLikeGuest'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const Inicio = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { inicioAnonimo } = useSignLikeGuest()

  return (
    <Container
      className='ocupar-pantalla d-flex flex-column justify-content-around align-items-center'
      fluid
    >
      <Image src='unio-icon.svg' alt='unio-icon' className='m-5 ' fluid />
      <Container className='d-flex flex-column  justify-content-flex-end m-5'>
        <Button
          className='mb-5 aparecer-animacion'
          size='large'
          onClick={() => navigate('/iniciar-sesion')}
        >
          {t('iniciar-sesion')}
        </Button>
        <Button
          className='mb-5 aparecer-animacion'
          size='large'
          onClick={inicioAnonimo}
        >

          {t('sesion-invitado')}
        </Button>
      </Container>
      <h1 className='unio-text text-uppercase'>Unio</h1>
    </Container>
  )
}

export default Inicio
