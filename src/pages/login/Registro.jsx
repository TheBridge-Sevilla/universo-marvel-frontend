import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, FormGroup, TextField, Link } from '@mui/material'
import { Form } from 'react-bootstrap'
import { Google } from 'react-bootstrap-icons'
import { useSignWithG } from '../../hooks/useSignWithG'
import { RegistrarUsuario } from '../../services/firebase/registrarUsuario'
import { Link as RouterLink } from 'react-router-dom'

export default function Registro() {
  const { t } = useTranslation()
  const { iniciarSesionConG } = useSignWithG()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [contraseña, setContraseña] = useState('')
  const { onSubmit } = RegistrarUsuario(nombre, email, contraseña)

  return (
    <Form
      className='h-100 d-flex flex-column justify-content-center'
      onSubmit={onSubmit}
    >
      <h1 className='my-5'>{t('registro')}</h1>
      <FormGroup className='d-flex flex-column justify-content-center mx-4'>
        <TextField
          name='nombre'
          label={t('usuario')}
          type='text'
          className='my-3'
          onChange={e => {
            setNombre(e.target.value)
          }}
        />
        <TextField
          name='email'
          label={t('email')}
          type='email'
          className='my-3'
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
        <TextField
          name='contraseña'
          label={t('contraseña')}
          type='password'
          className='my-3'
          onChange={e => {
            setContraseña(e.target.value)
          }}
        />
        <Button className='my-4' size='large' type='submit'>
          {t('crear-cuenta')}
        </Button>
      </FormGroup>
      <FormGroup className='d-flex flex-column justify-content-center align-items-center'>
        <p className='mb-4'>o</p>
        <Google
          size={50}
          className='zoom-animation mb-5'
          onClick={() => iniciarSesionConG()}
        />
        <Link component={RouterLink} to='/iniciar-sesion'>
          {t('iniciar-sesion')}
        </Link>
      </FormGroup>
    </Form>
  )
}
