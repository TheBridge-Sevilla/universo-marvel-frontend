import { Container, Image } from 'react-bootstrap'
import Avatar from '../../components/Avatar'
import { useTranslation } from 'react-i18next'
import Nav from 'react-bootstrap/Nav'
import Navbar from '../../components/navbar/Navbar'
import Favorito from './Favorito'
import MasVotado from './MasVotado'

export default function Destacados() {
  const { t } = useTranslation()
  return (
    <>
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
      <Navbar />
    </>
  )
}
