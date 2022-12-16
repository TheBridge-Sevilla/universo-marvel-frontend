import Feed from '../pages/feed/Feed'
import IniciarSesion from '../pages/login/IniciarSesion'
import Intro from '../pages/intro/Intro'

export default function Mapa(props) {
  switch (Object.values(props)[0]) {
    case 1:
      return <IniciarSesion />
    case 2:
      return <Feed />
    case 3:
      return <Intro />
    default:
      return <Intro />
  }
}
