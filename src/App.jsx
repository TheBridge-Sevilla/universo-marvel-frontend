import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import useLocalStorage from 'use-local-storage'
import RutasAnimadas from './services/rutasAnimadas'
import { useContextoUsuario } from './context/contextoUsuario'
import {auth} from "./services/firebase/firebase"
import { useEffect } from 'react'
import  {useNavigate}  from 'react-router-dom';

function App() {
  const {setUsuario, setUsuarioActual} = useContextoUsuario()
  const navigate = useNavigate();

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
      if (user) {
        // User is signed in.
        setUsuario(user.displayName);
        setUsuarioActual(user);
        navigate('/dashboard');
      } else {
        // User is signed out.
        setUsuario();
        setUsuarioActual();

      }
    });
    return () => unsubscribe();
  }, []);
  

  return (
    /*     <div className='App' data-theme={theme}>
           <button onClick={switchTheme}>
        Cambia a modo {theme == 'light' ? 'Noche' : 'Día'}
      </button>
      </div> */

      <RutasAnimadas />

  )
}

export default App
