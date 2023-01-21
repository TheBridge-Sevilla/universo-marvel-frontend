import 'bootstrap/dist/css/bootstrap.min.css'
import { useContextoUsuario } from './context/contextoUsuario'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { AnimatePresence } from 'framer-motion'
import { auth } from './services/firebase/firebase'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PrivateRoute from '../src/components/PrivateRoute'
import PublicRoute from '../src/components/PublicRoute'
import Inicio from '../src/pages/intro/Inicio'
import IniciarSesionEmail from '../src/pages/login/IniciarSesion'
import Registro from './../src/pages/login/Registro'
import Personajes from './../src/pages/personajes/Personajes'
import ErrorPage from './../src/pages/notFound/Error404'
import ContraseñaOlvidada from '../src/services/firebase/contraseñaOlvidada'
import Personaje from '../src/pages/personaje/Personaje'
import Configuracion from '../src/pages/configuracion/Configuracion'
import Destacados from '../src/pages/destacado/Destacado'
import { usePersonajes } from '../src/hooks/usePersonajes'
import { useDestacados } from './hooks/useDestacados'

function App() {
  const { i18n } = useTranslation()
  const {
    setUsuario,
    setUsuarioActual,
    isRecordarLocal,
    setImagenPerfil,
    usuarioActual,
    theme,
    idioma,
  } = useContextoUsuario()
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname
  const { personajesData, valoracionesData } = usePersonajes(1, undefined)
  const { masVotadosData } = useDestacados()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user && isRecordarLocal === 'recordar') {
        // User is signed in.
        setUsuario(user.displayName)
        setUsuarioActual(user)
        if (
          pathname === '/' ||
          pathname === '/iniciar-sesion' ||
          pathname === '/registro' ||
          pathname === '/contraseña-olvidada' ||
          pathname === '/dashboard'
        )
          navigate('/dashboard')
      } else {
        // User is signed out.
        setUsuario()
        setUsuarioActual()
      }
    })
    return () => unsubscribe()
  }, [auth])

  useEffect(() => {
    if (usuarioActual) {
      setImagenPerfil(usuarioActual.photoURL)
    } else setImagenPerfil('perfil-invitado.png')
  }, [usuarioActual])

  useEffect(() => {
    i18n.changeLanguage(idioma)
  }, [idioma])

  return (
    <Container
      className='App'
      data-theme={theme}
      style={{ overflowX: 'hidden', padding: '0' }}
    >
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            element={
              <PublicRoute>
                <Inicio />
              </PublicRoute>
            }
          />
          <Route
            path='iniciar-sesion'
            element={
              <PublicRoute>
                <IniciarSesionEmail />
              </PublicRoute>
            }
          />
          <Route
            path='registro'
            element={
              <PublicRoute>
                <Registro />
              </PublicRoute>
            }
          />
          <Route
            path='contraseña-olvidada'
            element={
              <PublicRoute>
                <ContraseñaOlvidada />
              </PublicRoute>
            }
          />
          <Route
            path='dashboard'
            element={
              <PrivateRoute>
                <Personajes data={{ personajesData, valoracionesData }} />
              </PrivateRoute>
            }
          />
          <Route
            path='dashboard/:personajeName'
            element={
              <PrivateRoute>
                <Personaje />
              </PrivateRoute>
            }
          />
          <Route
            path='destacado'
            element={
              <PrivateRoute>
                <Destacados data={{ masVotadosData }} />
              </PrivateRoute>
            }
          />
          <Route
            path='perfil-usuario'
            element={
              <PrivateRoute>
                <Configuracion />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </Container>
  )
}

export default App
