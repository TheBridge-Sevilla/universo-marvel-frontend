import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button, FormGroup, TextField } from '@mui/material'
import { Container, Form } from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import { useContextoUsuario } from '../../context/contextoUsuario'
import PasswordUsuario from './PasswordUsuario'
import AvatarUsuario from './AvatarUsuario'
import { useSignOut } from '../../hooks/useSignOut'
import { useSignWithG } from '../../hooks/useSignWithG'
import Interruptor from '../../components/Interruptor'

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
          <Interruptor />
          <Container className='d-flex flex-column justify-center align-items-center mt-5'>
            <Button className='my-2' onClick={iniciarSesionConG}>
              {t('iniciar-sesion')}
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
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{
            width: 0,
            transition: { duration: 0.8 },
          }}
          animate={{
            width: '100%',
          }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
          <Container className='ocupar-pantalla d-flex flex-column justify-center align-items-center m-2'>
            <h2 className='my-4'>{t('perfil')}</h2>
            <AvatarUsuario />
            <Interruptor />
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
        </m.div>
      </LazyMotion>
    )
  }
}
