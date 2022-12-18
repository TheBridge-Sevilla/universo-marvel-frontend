import { signInAnonymously } from 'firebase/auth'
import { auth } from './firebase'
import { useContextoUsuario } from '../../context/contextoUsuario'

export default function sesionInvitado() {
  const { setUsuario } = useContextoUsuario()

  const inicioAnonimo = () => {
    signInAnonymously(auth)
      .then(resultado => {
        console.log(resultado)
        setUsuario('invitado')
      })
      .catch(error => {
        console.log(error)
        // ...
      })
  }

  return { inicioAnonimo }
}
