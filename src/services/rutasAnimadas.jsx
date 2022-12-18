import { Routes, Route, useLocation } from 'react-router-dom'
import Inicio from './../pages/intro/Inicio'
import IniciarSesionEmail from './../pages/login/IniciarSesion'
import Registro from './../pages/login/Registro'
import Personajes from './../pages/personajes/Personajes'
import ErrorPage from './../pages/notFound/Error404'
import { AnimatePresence } from 'framer-motion'

function RutasAnimadas() {
  const location = useLocation()

  return (
    <main className='h-100' style={{ overflowX: 'hidden' }}>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Inicio />} />
          <Route path='iniciar-sesion' element={<IniciarSesionEmail />} />
          <Route path='registro' element={<Registro />} />
          <Route path='dashboard' element={<Personajes />} />
          <Route path='/' element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </main>
  )
}

export default RutasAnimadas
