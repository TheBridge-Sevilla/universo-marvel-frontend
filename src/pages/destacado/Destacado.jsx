import TopBar from '../../components/TopBar'
import Nav from 'react-bootstrap/Nav'
import Navbar from '../../components/Navbar'
import Favorito from './Favorito'
import MasVotado from './MasVotado'
export default function Destacados() {

  return (

    <div className='ocupar-pantalla'>
      <Nav className='justify-content-end'>
        <TopBar />
      </Nav>
      <Favorito />
      <MasVotado />
      <Navbar />
      </div>

  )
}
