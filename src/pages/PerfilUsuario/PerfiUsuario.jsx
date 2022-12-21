import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FormGroup, TextField } from '@mui/material' //Link?
import { Container, Form } from 'react-bootstrap'
import { auth, storage } from '../../services/firebase/firebase'
import { updateProfile } from 'firebase/auth'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import BottomBar from '../../components/BottomBar'
import { useContextoUsuario } from '../../context/contextoUsuario'
import PasswordUsuario from './PasswordUsuario'
import AvatarUsuario from './AvatarUsuario'
//import Stack from '@mui/material/Stack'

export default function PerfilUsuario() {
  const { usuarioActual } = useContextoUsuario()
  const { t } = useTranslation()


  return (
/*     <Container spacing={2} justifyContent='center' alignItems='center'> */
          <Container
      className='d-flex flex-column justify-content-around align-items-center'
      fluid
    >
      <h6 className='my-5'>{t('Perfil')}</h6>
<AvatarUsuario />
      <Form className='d-flex flex-column justify-content-center'>
        <FormGroup className='d-flex flex-column justify-content-center mx-4'>
          <TextField
            disabled
            name='nombre'
            label={t('usuario')}
            /*              defaultValue={usuarioActual.displayName}  */
            type='text'
            className='my-3'
          />
          <TextField
            disabled
            name='email'
            label={t('email')}
            type='email'
            /*             defaultValue={usuarioActual.email}  */
            className='my-3'
          />
        </FormGroup>
      </Form>
      <PasswordUsuario />
      <BottomBar />
    </Container>
  )
}
/*               <InputLabel htmlFor='outlined-adornment-password'
              type='text'
              ref={contraseñaRef}>
                Password
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Password'
              /> */
