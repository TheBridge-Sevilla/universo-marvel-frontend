import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Personaje from '../Personaje'
import Registrarse from '../../firebase/registrarse'
import RegistroAnonimo from '../../firebase/registroAnonimo'
import IniciarSesion from '../IniciarSesion'

function App() {
  return (
    <>
    <Personaje />
    <IniciarSesion />
    </>
  )
}

export default App
