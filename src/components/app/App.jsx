import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Personaje from '../personaje'
import Registrarse from '../../firebase/registrarse'
import RegistroAnonimo from '../../firebase/registroAnonimo'

function App () {
  return (<>
    <Registrarse />
    <RegistroAnonimo />
  </>
  )
}

export default App