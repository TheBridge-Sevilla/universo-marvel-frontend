import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Menu from './Menu';

function App() {
  const [count, setCount] = useState(0)
  const url = import.meta.env.BASE_URL
  useEffect(() => {
    fetch(url)
      .then(() => console.log("HOLA"));
  },);
  return (
    <Container className="bg-light vh-100 ">
      <Menu/>
      <Container className="d-flex flex-column">
        <Container className="bg-info">
          <Row className="bg-info">
            <Col><h3>Personajes</h3> </Col>
            <Col><h3>Más votados</h3></Col>
            <Col><h3>GitHub</h3></Col>
          </Row>
        </Container>
        <Container className="d-flex flex-column  ">
          <Row className="bg-warning ">
            <Col><h3>Primero</h3></Col>
            <Col><h3>Primero</h3></Col>
            <Col><h3>Primero</h3></Col>
          </Row>
        </Container>
      </Container>
    </Container>
  )
}

export default App
