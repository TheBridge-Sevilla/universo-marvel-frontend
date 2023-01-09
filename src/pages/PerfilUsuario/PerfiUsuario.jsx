import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button, FormGroup, TextField } from '@mui/material'
import { Container, Form } from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import { useContextoUsuario } from '../../context/contextoUsuario'
import PasswordUsuario from './PasswordUsuario'
import AvatarUsuario from './AvatarUsuario'
import { useSignOut } from '../../hooks/useSignOut'

export default function PerfilUsuario() {
  const { usuarioActual } = useContextoUsuario()
  const { cerrarSesion } = useSignOut()
  const { t } = useTranslation()

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
          <Button className='my-5' onClick={cerrarSesion}>
            {t('cerrar-sesion')}
          </Button>
        </Container>
        <Navbar />
      </m.div>
    </LazyMotion>
  )
}
