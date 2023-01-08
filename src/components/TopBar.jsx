import Avatar from '@mui/material/Avatar'
import { Container } from 'react-bootstrap'
import { useContextoUsuario } from '../context/contextoUsuario'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useLocation } from 'react-router-dom'

export default function TopBar(props) {
  const { imagenPerfil } = useContextoUsuario()
  const navigate = useNavigate()
  const location = useLocation()
  const currentURL = location.pathname
  const UrlPersonaje = currentURL.includes('/personaje')

  const volverAtras=()=>{
    if (UrlPersonaje ){
      navigate('/dashboard')
    }
    else{
      navigate(-1)
    }
  }

  return (
    <Container className='d-flex justify-content-between mt-3'>
      {' '}
      <Nav>
        <ArrowBackIcon
          className='flecha-volver'
          fontSize='large'
          onClick={() => volverAtras()}
        />
      </Nav>
      <Avatar
       sx={{ width: props.sizes, height: props.sizes }}
        color='action'
        className='avatar'
        alt='Google Photo/Initial'
        src={imagenPerfil}
        referrerPolicy='no-referrer'
        onClick={() => navigate("/perfil-usuario")}
      />
    </Container>
  )
}
