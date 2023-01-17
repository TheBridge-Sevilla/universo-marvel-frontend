import { useTranslation } from 'react-i18next'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Navbar from '../../components/Navbar'
import { Container } from 'react-bootstrap'
import Interruptor from '../../components/Interruptor'
import { useSignOut } from '../../hooks/useSignOut'
import { useSignWithG } from '../../hooks/useSignWithG'
import { Button } from '@mui/material'

export default function Anonimo() {
  const { t } = useTranslation()
  const { cerrarSesion } = useSignOut()
  const { iniciarSesionConG } = useSignWithG()

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
        transition={{ duration: 0.3 }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        className='min-vh-100'
      >
        <Navbar />
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
      </m.div>
    </LazyMotion>
  )
}