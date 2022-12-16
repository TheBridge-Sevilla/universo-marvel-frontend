import Feed from '../pages/feed/Feed'
import IniciarSesion from '../pages/login/IniciarSesion'
import Intro from '../pages/intro/Intro'
//import Inicio from '../pages/intro/Inicio'
import FormularioRegistro from '../pages/login/FormularioRegistro'
import { useContextoUsuario } from '../context/contextoUsuario'

export default function Mapa() {
  
  const {pantalla} = useContextoUsuario()

  console.log(pantalla,"case")
  switch (pantalla) {
    case 1:
      return <IniciarSesion />
    case 2:
      return<Feed />
    case 3:
       return <FormularioRegistro />
    default:
      return <Intro />
  }
}
