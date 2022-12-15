import { useTranslation } from 'react-i18next'
import { Button, FormGroup, TextField } from '@mui/material'
import { Container } from 'react-bootstrap'
import { Google } from 'react-bootstrap-icons'
import { useSignWithG } from '../../hooks/useSignWithG'

function NuevoUsuario() {
  const { t } = useTranslation()
  const { iniciarSesionConG } = useSignWithG()

  return (
    <Container fluid>
      <h1 className='text-left' >{t('registro')}</h1>
      <FormGroup className='d-flex flex-column justify-content-center mx-4'>
        <TextField
          name='usuario'
          label={t('usuario')}
          type='text'
          className='my-3'
          focused
        />
        <TextField
          name='nombre'
          label={t('nombre')}
          type='text'
          className='my-3'
          focused
        />
        <TextField
          name='apellidos'
          label={t('apellidos')}
          type='text'
          className='my-3'
          focused
        />
        <TextField
          name='email'
          label={t('apellidos')}
          type='email'
          className='my-3'
          focused
        />
        <TextField
          name='contraseña'
          label={t('contraseña')}
          type='password'
          className='my-3'
          focused
        />
        <Button className='my-4' size='large'>
          {t('crear-cuenta')}
        </Button>
      </FormGroup>
      <FormGroup className='d-flex flex-column justify-content-center align-items-center'>
        <p className='mb-4'>o</p>
        <Google
          size={50}
          className='zoom-animation mx-4'
          onClick={() => iniciarSesionConG()}
        />
      </FormGroup>
    </Container>
  )
}

export default NuevoUsuario
