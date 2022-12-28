import { useTranslation } from 'react-i18next'
import { FormGroup, TextField } from '@mui/material'
import { Container, Form } from 'react-bootstrap'
import Navbar from '../../components/navbar/Navbar'
import { useContextoUsuario } from '../../context/contextoUsuario'
import PasswordUsuario from './PasswordUsuario'
import AvatarUsuario from './AvatarUsuario'

export default function PerfilUsuario() {
  const { usuarioActual } = useContextoUsuario()
  const { t } = useTranslation()

  return (
    <>
      <Container className='d-flex flex-column justify-center align-items-center m-2'>
        <h6 className='my-4'>{t('Perfil')}</h6>
        <AvatarUsuario />
        <Form className='d-flex flex-column justify-content-center mt-2'>
          <FormGroup className='d-flex flex-column justify-content-center mx-4'>
            <TextField
              disabled
              name='nombre'
              label={t('usuario')}
              defaultValue={usuarioActual.displayName}
              type='text'
              className='my-3'
              id='placeholder'
            />
            <TextField
              disabled
              name='email'
              label={t('email')}
              type='email'
              defaultValue={usuarioActual.email}
              className='my-3'
              id='placeholder'
            />
          </FormGroup>
        </Form>
        <PasswordUsuario />
      </Container>
      <Navbar />
    </>
  )
}
