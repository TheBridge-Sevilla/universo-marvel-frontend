import './Intro.css'
import { Container, Image } from 'react-bootstrap'

function Intro() {
  return (
    <Container
      className='h-100 d-flex flex-column justify-content-around align-items-center'
      fluid
    >
      <Image src='unio-icon.svg' alt='unio-icon' fluid />
      <h1 className='unio-text text-uppercase'>Unio</h1>
    </Container>
  )
}

export default Intro
