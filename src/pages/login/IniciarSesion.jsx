import { DoorOpen, Google } from 'react-bootstrap-icons'
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Link,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Container, Form } from 'react-bootstrap'
import { useSignWithG } from './../../hooks/useSignWithG'
import { useContextoUsuario } from '../../context/contextoUsuario'
import { useState } from 'react'
import { IniciarSesion } from '../../services/firebase/iniciarUsuario'
import useSignLikeGuest from '../../hooks/useSignLikeGuest'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { animacionLogin } from '../../services/animacionLogin'

function IniciarSesionEmail() {
  const { t } = useTranslation()
  const { setOlvidarContraseña } = useContextoUsuario()
  const { iniciarSesionConG } = useSignWithG()
  const [email, setEmail] = useState('')
  const [contraseña, setContraseña] = useState('')
  const { onSubmit } = IniciarSesion(email, contraseña)
  const { inicioAnonimo } = useSignLikeGuest()
  const { animacion, transicion } = animacionLogin()

  return (
    <motion.div
      className='h-100'
      initial='initial'
      animate='in'
      exit='out'
      variants={animacion}
      transition={transicion}
    >
      <Form
        className='h-100 d-flex flex-column justify-content-center'
        onSubmit={onSubmit}
      >
        <h1 className='my-5'>{t('iniciar-sesion')}</h1>
        <FormGroup className='mt-5 mx-5 d-flex flex-column justify-content-center'>
          <TextField
            name='email'
            label={t('email')}
            type='text'
            className='mb-4'
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            name='contraseña'
            label={t('contraseña')}
            type='password'
            className='mb-2'
            onChange={e => setContraseña(e.target.value)}
          />
          <Container className='d-flex justify-content-between align-items-center mb-5 pointer'>
            <FormControlLabel control={<Checkbox />} label={t('recordar')} />
            <a onClick={() => setOlvidarContraseña(true)}>
              {t('contraseña-olvidada')}
            </a>
          </Container>
          <Button className='mb-5' size='large' type='submit'>
            {t('continuar')}
          </Button>
        </FormGroup>
        <FormGroup className='d-flex flex-column justify-content-center align-items-center'>
          <Container className='my-5'>
            <Google
              size={40}
              className='zoom-animation mx-4'
              onClick={() => iniciarSesionConG()}
            />
            <DoorOpen
              size={40}
              className='checkbox zoom-animation mx-4'
              onClick={inicioAnonimo}
            />
          </Container>
          <Link component={RouterLink} to='/registro'>
            {t('registro')}
          </Link>
        </FormGroup>
      </Form>
    </motion.div>
  )
}

export default IniciarSesionEmail
