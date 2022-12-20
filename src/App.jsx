import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import useLocalStorage from 'use-local-storage'
import RutasAnimadas from './services/rutasAnimadas'
import { useContextoUsuario } from './context/contextoUsuario'
import { auth } from "./services/firebase/firebase"
import { useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';

function App() {
  const { setUsuario, setUsuarioActual, isRecordarLocal } = useContextoUsuario()
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  /* const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  } */





  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user && isRecordarLocal === 'recordar') {
        // User is signed in.
        setUsuario(user.displayName);
        setUsuarioActual(user);
        if (pathname === "/" || pathname === "/iniciar-sesion" || pathname === "/registro" || pathname === "/contraseña-olvidada"|| pathname === "/dashboard" )
        navigate('/dashboard');
      } else {
        // User is signed out.
        setUsuario();
        setUsuarioActual();

      }
    });
    return () => unsubscribe();
  }, [auth]);


  return (
    /*     <div className='App' data-theme={theme}>
           <button onClick={switchTheme}>
        Cambia a modo {theme == 'light' ? 'Noche' : 'Día'}
      </button>
      </div> */
    <>
    <div>current path is: { pathname}</div>
    <RutasAnimadas />
    </>
  )
}

export default App
