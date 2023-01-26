import TopBar from '../../components/TopBar'
import Nav from 'react-bootstrap/Nav'
import Navbar from '../../components/Navbar'
import Favorito from './Favorito'
import MasVotado from './MasVotado'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function Destacados(props) {
  return (
    <LazyMotion features={domAnimation}>
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        delay: 1,
      }}
      transition={{ duration: 0.2 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      className='min-vh-100'
    >
        <Nav className='justify-content-end'>
          <TopBar />
        </Nav>
        <Favorito />
        <MasVotado json={props.data.masVotadosData} />
        <Navbar />
      </m.div>
    </LazyMotion>
  )
}