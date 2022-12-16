import Feed from '../pages/feed/Feed'
import IniciarSesion from '../pages/login/IniciarSesion'

export default function Mapa(props) {

if (props.value == 0) {
    return (
        <IniciarSesion />
    )
  }
  if (props.value == 1) {
    return (
        <Feed />
    )
  }  
}
