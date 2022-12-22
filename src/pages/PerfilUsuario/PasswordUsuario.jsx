import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
//import { useTranslation } from 'react-i18next'
import { Button, FormGroup } from '@mui/material' //Link?
import { Form } from 'react-bootstrap'
import { useContextoUsuario } from '../../context/contextoUsuario'
import { updatePassword } from 'firebase/auth'
import { auth } from '../../services/firebase/firebase'

export default function PasswordUsuario() {
  //const { t } = useTranslation()
  const [CambioContraseña, setCambioContraseña] = useState(false)
  const [contraseña, setContraseña] = useState('')
  const { usuarioActual } = useContextoUsuario()
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = e => {
    e.preventDefault()
  }

  /*   usuarioActual
    .updatePassword(nuevaContraseña)
    .then(() => {
      console.log('User password updated')
    })
    .catch(error => {
      console.log('Error updating user password:', error)
    })
 */

  function obtenerContraseña(e) {
    setContraseña(e.target.value)
  }

  async function cambiarContraseña(nuevaContraseña) {
    const user = auth.currentUser
    updatePassword(user, nuevaContraseña)
      .then(() => {
        console.log('error-contraseña')
      })
      .catch(() => {
        console.log('error')
      })
  }

  function onSubmitContraseña(e) {
    e.preventDefault()
    if (!contraseña) {
      return console.log('Introduzca contraseña')
    }
    if (contraseña) {
      cambiarContraseña(contraseña)
      setCambioContraseña(!CambioContraseña)
    }
  }
  console.log(contraseña, 'submitContraseña')
  const handleContraseña = () => {
    setCambioContraseña(!CambioContraseña)
  }

  return (
    <Form className='d-flex flex-column justify-content-center'>
      <Button
        className='flex align-items-center justify-content-center  m-auto mb-2 font-bold w-9'
        label='cambiar-contraseña'
        onClick={() => handleContraseña()}
      >Cambiar contraseña</Button>
      {CambioContraseña ? (
        <FormControl className='d-flex justify-content-center mx-4'>
          <FormGroup>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              onChange={obtenerContraseña}
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
            />
            <Button
              className='flex align-items-center justify-content-center  my-2 font-bold p-button-outlined  w-9'
              type='submit'
              label='actualizar-contraseña'
              onClick={onSubmitContraseña}
            >Actualizar</Button>{' '}
          </FormGroup>
        </FormControl>
      ) : (
        ''
      )}
    </Form>

  )
}
