import { useContextoUsuario } from '../../context/contextoUsuario'
import Anonimo from './Anonimo'
import Registrado from './Registrado'

export default function PerfilUsuario() {
  const { usuarioActual, usuario } = useContextoUsuario()

  if (usuario === 'invitado') {
    return <Anonimo />
  } else {
    return <Registrado usuarioActual={usuarioActual} />
  }
}
