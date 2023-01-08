import { useTranslation } from 'react-i18next'
import { Button, FormGroup, TextField } from '@mui/material'
import { Container, Form } from 'react-bootstrap'
import Navbar from '../../components/navbar/Navbar'
import { useContextoUsuario } from '../../context/contextoUsuario'
import PasswordUsuario from './PasswordUsuario'
import AvatarUsuario from './AvatarUsuario'
import { useSignOut } from '../../hooks/useSignOut'
import { useSignWithG } from '../../hooks/useSignWithG'

export default function PerfilUsuario() {
  const { usuarioActual, usuario } = useContextoUsuario()
  const { cerrarSesion } = useSignOut()
  const { iniciarSesionConG } = useSignWithG()
  const { t } = useTranslation()

  if (usuario == 'invitado') {
    return (
      <>
        <Container
          className='ocupar-pantalla d-flex flex-column justify-content-around align-items-center'
          fluid
        >
          <h2 className='mx-4'>{t('perfil-invitado')}</h2>
          <Container className='-flex flex-column justify-center align-items-center mt-5'>
            <Button className='my-2' onClick={iniciarSesionConG}>
              Iniciar sesion con Google
            </Button>
            <Button className='my-2' onClick={cerrarSesion}>
              {t('cerrar-sesion')}
            </Button>
          </Container>
        </Container>
        <Navbar />
      </>
    )
  } else {
    return (
      <>
        <Container className='d-flex flex-column justify-center align-items-center m-2'>
          <h6 className='my-4'>{t('perfil')}</h6>
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
                id='placeholder usuario-input'
              />
              <TextField
                disabled
                name='email'
                label={t('email')}
                type='email'
                defaultValue={usuarioActual.email}
                className='my-3'
                id='placeholder usuario-input'
              />
            </FormGroup>
          </Form>
          <PasswordUsuario />
          <Button className='my-5' onClick={cerrarSesion}>
            {t('cerrar-sesion')}
          </Button>
        </Container>
        <Navbar />
      </>
    )
  }
}
