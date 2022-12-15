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
import { useSignWithG } from './../../hooks/useSignWithG'
import { iniciarSesionAnonima } from '../../services/firebase/iniciarSesionAnonima'
import { useContextoUsuario } from '../../context/contextoUsuario'
import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase/firebase'

function IniciarSesion() {
  const { t } = useTranslation()
  const {  usuario,setUsuario } = useContextoUsuario()
  const { iniciarSesionConG } = useSignWithG()
  const { inicioAnonimo } = iniciarSesionAnonima()
  const [email, setEmail] = useState('')
  const [contraseña, setContraseña] = useState('')

  const iniciarSesionEmail = (email, contraseña,) => {
    signInWithEmailAndPassword(auth, email, contraseña).then(() => {
      setUsuario(auth.currentUser.displayName)


    }).catch((e) => {
      if (e.code == "auth/user-not-found") {

      }
      if (e.code == "auth/wrong-password") {

      }

    })

  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !contraseña) {
      console.log("rellena los datos")

    }
    if (email && contraseña){
      iniciarSesionEmail(email, contraseña)

    } 
  };

  return (
    <div>
      <Container className='h-100' fluid>
        <h1 className='mb-5'>{t('iniciar-sesion')}</h1>
        <form onSubmit={onSubmit}>
          <FormGroup className='mt-5 mx-5 d-flex flex-column justify-content-center'>
            <TextField
              name='email'
              label={t('email')}
              type='text'
              className='mb-4'
              onChange={(e)=>setEmail(e.target.value)}
              
            />
            <TextField
              name='contraseña'
              label={t('contraseña')}
              type='password'
              className='mb-2'
              onChange={(e)=>setContraseña(e.target.value)}
            />
            <Container className='d-flex justify-content-between align-items-center mb-5'>
              <FormControlLabel control={<Checkbox />} label={t('recordar')} />
              <a>{t('contraseña-olvidada')}</a>
            </Container>
            <Button className='mb-5' size='large' type='submit'>
              {t('continuar')}
            </Button>
          </FormGroup>
        </form>
        <Container className='d-flex justify-content-center my-5'>
          <Google
            size={40}
            className='zoom-animation mx-4'
            onClick={() => iniciarSesionConG()}
          />
          <DoorOpen
            size={40}
            className='zoom-animation mx-4'
            onClick={() => inicioAnonimo()}
          />
        </Container>
        <h5 className='mt-5'>
          <u>{t('crear-cuenta')}</u>
        </h5>
      </Container>
    </div>
  )
}

export default IniciarSesion
