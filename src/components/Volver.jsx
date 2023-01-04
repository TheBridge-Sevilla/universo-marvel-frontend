import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function Volver() {
  const navigate = useNavigate()

  return (
    <Nav>
      <ArrowBackIcon
        className='flecha-volver'
        fontSize='large'
        onClick={() => navigate(-1)}
      />
    </Nav>
  )
}
