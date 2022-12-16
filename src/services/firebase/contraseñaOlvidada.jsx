import React, { useState } from 'react'
import { auth } from "./firebase"
import { sendPasswordResetEmail } from "firebase/auth";
import {
  Button,
  FormGroup,
  TextField,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'
import { useContextoUsuario } from '../../context/contextoUsuario'

export default function ContraseñaOlvidada() {
  const [email, setEmail] = useState('')
  const { t } = useTranslation()
  const { setOlvidarContraseña} = useContextoUsuario()
  const contraseñaOlvidada = (email) => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log("contraseña cambiada")

    })
      .catch((e) => {
        if (e.code == "auth/user-not-found") {

        }
        if (e.code == "auth/invalid-email") {

        }

      })
  }

  const forgotPasswordHandler = (e) => {
    e.preventDefault()
    if (!email) {
      console.log("introduce el email")
    } else if (email) {
      contraseñaOlvidada(email)

    }
  }

  return (
    <div>

      <Container className='h-100' fluid>
        <h1 className='mb-5'>{t('iniciar-sesion')}</h1>
        <form >
          <FormGroup className='mt-5 mx-5 d-flex flex-column justify-content-center'>
            <TextField
              name='email'
              label={t('email')}
              type='text'
              className='mb-4'
              onChange={(e) => setEmail(e.target.value)}

            />

            <a className='pointer mb-5 no-underline text-right' onClick={() => setOlvidarContraseña(false)}>He recordado la contraseña</a>
            <Button className='mb-5' size='large' onClick={() => forgotPasswordHandler()}>
              {t('continuar')}
            </Button>

          </FormGroup>
        </form>

      </Container>

    </div>
  )
}
