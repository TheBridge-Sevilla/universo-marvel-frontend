import { DoorOpen, Google } from 'react-bootstrap-icons'
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'

function IniciarSesion() {
  const { t } = useTranslation()

  return (
    <Container
      className='h-100 d-flex flex-column justify-content-center'
      fluid
    >
      <h1 className='mb-5'>{t('iniciar-sesion')}</h1>
      <FormGroup className='mt-5 mx-5'>
        <TextField
          name='nombre'
          label={t('nombre')}
          type='text'
          className='mb-4'
          focused
        />
        <TextField
          name='contraseña'
          label={t('contraseña')}
          type='password'
          className='mb-2'
          focused
        />
        <Container className='d-flex justify-content-between align-items-center mb-5'>
          <FormControlLabel control={<Checkbox />} label={t('recordar')} />
          <a>{t('contraseña-olvidada')}</a>
        </Container>
        <Button className='mb-5' size='large'>
          {t('continuar')}
        </Button>
      </FormGroup>
      <Container className='d-flex justify-content-center my-5'>
        <Google size={40} className='zoom-animation mx-4' />
        <DoorOpen size={40} className='zoom-animation mx-4' />
      </Container>
      <h5 className='mt-5'>
        <u>{t('crear-cuenta')}</u>
      </h5>
    </Container>
  )
}

export default IniciarSesion
