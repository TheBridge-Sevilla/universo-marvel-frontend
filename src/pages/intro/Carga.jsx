import './Inicio.css'
import { Container, Image } from 'react-bootstrap'

const Carga = () => {


  return (
    <Container
      className='ocupar-pantalla d-flex flex-column justify-content-around align-items-center'
      fluid
    >
      <Image src='unio-icon.svg' alt='unio-icon' className='m-5 ' fluid />
      <Container className='d-flex flex-row  justify-content-around align-item-end'>
        <p>Cargando Personajes</p>
      <div className="loading"></div>
      </Container>
      <h1 className='unio-text text-uppercase'>Unio</h1>
    </Container>
  )
}

export default Carga
