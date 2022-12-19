import Personajes from '../components/personajes/Personajes'
import IniciarSesion from '../pages/login/IniciarSesion'
import Intro from '../pages/intro/Intro'
//import Inicio from '../pages/intro/Inicio'
import FormularioRegistro from '../pages/login/FormularioRegistro'
import { useContextoUsuario } from '../context/contextoUsuario'

export default function Mapa() {
  
  const {pantalla} = useContextoUsuario()

  console.log(pantalla,"case")
  switch (pantalla) {
    case 'home':
      return <IniciarSesion />
    case 'personajes':
      return<Personajes />
    case 'setting':
       return <FormularioRegistro />
    default:
      return <Intro />
  }
}
