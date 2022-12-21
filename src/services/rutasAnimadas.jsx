import { Routes, Route, useLocation } from 'react-router-dom'
import Inicio from './../pages/intro/Inicio'
import IniciarSesionEmail from './../pages/login/IniciarSesion'
import Registro from './../pages/login/Registro'
import Personajes from './../pages/personajes/Personajes'
import ErrorPage from './../pages/notFound/Error404'
import { AnimatePresence } from 'framer-motion'
import { Container } from 'react-bootstrap'
import ContraseñaOlvidada from "./firebase/contraseñaOlvidada"
import Personaje from '../components/personaje/Personaje'

function RutasAnimadas() {
  const location = useLocation()

  return (
    <Container style={{ overflowX: 'hidden', padding: '0' }}>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Inicio />} />
          <Route path='iniciar-sesion' element={<IniciarSesionEmail />} />
          <Route path='registro' element={<Registro />} />
          <Route path='contraseña-olvidada' element={<ContraseñaOlvidada />} />
          <Route path='dashboard' element={<Personajes />} />
          <Route path='personaje' element={<Personaje />} />
          <Route path='/' element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </Container>
  )
}

export default RutasAnimadas
