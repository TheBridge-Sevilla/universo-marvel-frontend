import TopBar from '../../components/TopBar'
import Nav from 'react-bootstrap/Nav'
import Navbar from '../../components/Navbar'
import Favorito from './Favorito'
import MasVotado from './MasVotado'
import { useContextoUsuario } from '../../context/contextoUsuario'

export default function Destacados() {
  const { usuario } = useContextoUsuario()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <>
      <Nav className='justify-content-end'>
        <TopBar />
      </Nav>
      <Favorito responsive={responsive} />
      <MasVotado responsive={responsive} />
      <Navbar />
    </>
  )
}
