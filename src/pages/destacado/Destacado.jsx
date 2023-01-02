import Avatar from '../../components/Avatar'
import Nav from 'react-bootstrap/Nav'
import Navbar from '../../components/navbar/Navbar'
import Favorito from './Favorito'
import MasVotado from './MasVotado'

export default function Destacados() {
  return (
    <>
<<<<<<< HEAD
      <Nav className='justify-content-end'>
        <Avatar />
      </Nav>
      <Favorito />
      <MasVotado/>
=======
      <Container className='d-flex-column'>
        <Nav className='justify-content-end'>
          <Avatar />
        </Nav>
        <Favorito />
        <p>{t('Tu personaje favorito')}</p>
        <Image type='image/svg+xml' src='favorito.svg'></Image>

        <p>{t('Tu personaje más votado')}</p>
        <MasVotado />
        <Image src='/votado.svg'></Image>
      </Container>
>>>>>>> 43bab39030517697cc566cfb9ee29f58296df555
      <Navbar />
    </>
  )
}
