//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import Personaje from '../Personaje'
import Registrarse from '../../firebase/registrarse'
//import RegistroAnonimo from '../../firebase/registroAnonimo'
import Destacados from '../Destacados'

function App () {
  return (<>
    <Registrarse />
    <Destacados />
  </>
  )
}
export default App