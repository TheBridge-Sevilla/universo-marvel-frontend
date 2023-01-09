import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import RutasAnimadas from './services/rutasAnimadas'
import { useContextoUsuario } from './context/contextoUsuario'
import { auth } from './services/firebase/firebase'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation();
  const {
    setUsuario,
    setUsuarioActual,
    isRecordarLocal,
    setImagenPerfil,
    usuarioActual,
    theme,
    idioma
  } = useContextoUsuario()
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname


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
         <div className='App' data-theme={theme}>
      <RutasAnimadas />
      </div> 

  )
}

export default App
