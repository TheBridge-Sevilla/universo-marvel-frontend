import Avatar from '@mui/material/Avatar'
import { Container } from 'react-bootstrap'
import { useContextoUsuario } from '../context/contextoUsuario'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function TopBar(props) {
  const { imagenPerfil } = useContextoUsuario()
  const navigate = useNavigate()

  return (
    <Container className='d-flex justify-content-between mt-3'>
      <Nav>
        <ArrowBackIcon
          className='flecha-volver'
          fontSize='large'
          onClick={() => navigate(-1)}
        />
      </Nav>
      <Avatar
       sx={{ width: props.sizes, height: props.sizes }}
        color='action'
        alt='Google Photo/Initial'
        src={imagenPerfil}
        referrerPolicy='no-referrer'
      />
    </Container>
  )
}
