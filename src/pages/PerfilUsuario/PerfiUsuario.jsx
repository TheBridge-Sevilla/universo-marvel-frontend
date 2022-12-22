import { useTranslation } from 'react-i18next'
import { FormGroup, TextField } from '@mui/material' 
import { Container, Form } from 'react-bootstrap'
import Navbar from '../../components/navbar/Navbar'
import { useContextoUsuario } from '../../context/contextoUsuario'
import PasswordUsuario from './PasswordUsuario'
import AvatarUsuario from './AvatarUsuario'
import { useSignOut } from "../../hooks/useSignOut"
import { Button } from '@mui/material'
export default function PerfilUsuario() {
  const { usuarioActual } = useContextoUsuario()
  const { cerrarSesion } = useSignOut()
  const { t } = useTranslation()


  return (
    <Container
      className='d-flex flex-column justify-content-around align-items-center'
      fluid
    >
      <h6 className='my-5'>{t('Perfil')}</h6>
      <AvatarUsuario />
      <Button onclick={cerrarSesion}>Cerrar Sesion</Button>
      <Form className='d-flex flex-column justify-content-center'>
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
      <Navbar />
    </Container>
  )
}