import { useTranslation } from 'react-i18next'
import { useContextoUsuario } from '../../context/contextoUsuario'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Navbar from '../../components/Navbar'
import { Container, Form } from 'react-bootstrap'
import AvatarUsuario from '../../components/AvatarUsuario'
import { Button, FormGroup, TextField } from '@mui/material'
import Interruptor from '../../components/Interruptor'
import PasswordUsuario from './PasswordUsuario'
import { useSignOut } from '../../hooks/useSignOut'

export default function Registrado() {
  const { t } = useTranslation()
  const { usuarioActual } = useContextoUsuario()
  const { cerrarSesion } = useSignOut()

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          delay: 1,
        }}
        transition={{ duration: 0.2 }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        className='min-vh-100'
      >
        <Navbar />
        <Container className='vh-100 d-flex flex-column justify-center align-items-center m-2'>
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
      </m.div>
    </LazyMotion>
  )
}
