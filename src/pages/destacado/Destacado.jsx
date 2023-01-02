import Avatar from '../../components/Avatar'
import Nav from 'react-bootstrap/Nav'
import Navbar from '../../components/navbar/Navbar'
import Favorito from './Favorito'
import MasVotado from './MasVotado'

export default function Destacados() {
  return (
    <>
      <Nav className='justify-content-end'>
        <Avatar />
      </Nav>
      <Favorito />
      <MasVotado/>
      <Navbar />
    </>
  )
}
