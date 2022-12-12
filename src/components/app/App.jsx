//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Personaje from '../Personaje'
import Registrarse from '../../firebase/registrarse'
//import RegistroAnonimo from '../../firebase/registroAnonimo'

function App () {
  return (<>
    <Registrarse />
    <Personaje />
  </>
  )
}

export default App