import { Routes, Route, useLocation } from 'react-router-dom'
import Inicio from './../pages/intro/Inicio'
import IniciarSesionEmail from './../pages/login/IniciarSesion'
import Registro from './../pages/login/Registro'
import Personajes from './../pages/personajes/Personajes'
import ErrorPage from './../pages/notFound/Error404'
import { AnimatePresence } from 'framer-motion'
import { Container } from 'react-bootstrap'
import ContraseñaOlvidada from "./firebase/contraseñaOlvidada"
import PrivateRoute from '../components/PrivateRoute'
import PublicRoute from '../components/PublicRoute'


function RutasAnimadas() {
  const location = useLocation()
  

  return (
    <Container style={{ overflowX: 'hidden' }}>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<PublicRoute><Inicio /></PublicRoute>} />
          <Route path='iniciar-sesion' element={<PublicRoute><IniciarSesionEmail /></PublicRoute>} />
          <Route path='registro' element={<PublicRoute><Registro /></PublicRoute>} />
          <Route path='contraseña-olvidada' element={<PublicRoute><ContraseñaOlvidada /></PublicRoute>} />
          <Route path='dashboard' element={<PrivateRoute ><Personajes /></PrivateRoute>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </Container>
  )
}

export default RutasAnimadas
