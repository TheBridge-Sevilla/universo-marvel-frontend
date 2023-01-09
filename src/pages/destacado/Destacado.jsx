import TopBar from '../../components/TopBar'
import Nav from 'react-bootstrap/Nav'
import Navbar from '../../components/Navbar'
import Favorito from './Favorito'
import MasVotado from './MasVotado'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function Destacados() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{
          width: 0,
          transition: { duration: 0.8 },
        }}
        animate={{
          width: '100%',
        }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <Nav className='justify-content-end'>
          <TopBar />
        </Nav>
        <Favorito />
        <MasVotado />
        <Navbar />
      </m.div>
    </LazyMotion>
  )
}
