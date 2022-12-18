import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//import useLocalStorage from 'use-local-storage'
import Inicio from './pages/intro/Inicio'
import IniciarSesionEmail from './pages/login/IniciarSesion'
import Registro from './pages/login/Registro'
import Personajes from './pages/personajes/Personajes'
import ErrorPage from './pages/notFound/Error404'
import { Container } from 'react-bootstrap'

function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut')
  }, [location, displayLocation])
  /* const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  } */
  return (
    /*     <div className='App' data-theme={theme}>
           <button onClick={switchTheme}>
        Cambia a modo {theme == 'light' ? 'Noche' : 'Día'}
      </button>
      </div> */
    <Container
      className={`h-100 ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn')
          setDisplayLocation(location)
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path='/' element={<Inicio />} />
        <Route path='iniciar-sesion' element={<IniciarSesionEmail />} />
        <Route path='registro' element={<Registro />} />
        <Route path='dashboard' element={<Personajes />} />
        <Route path='/' element={<ErrorPage />} />
      </Routes>
    </Container>
  )
}

export default App
