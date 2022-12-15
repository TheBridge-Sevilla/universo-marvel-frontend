import {
  signInWithPopup,
  GoogleAuthProvider,
  linkWithPopup,
} from 'firebase/auth'
import { auth } from '../services/firebase/firebase'
import { useContextoUsuario } from '../context/ContextoUsuario'

export function useSignWithG() {
  const { usuario, setUsuario } = useContextoUsuario()

  const provider = new GoogleAuthProvider()
  const iniciarSesionConG = () => {
    if (usuario == 'invitado') {
      linkWithPopup(auth.currentUser, provider)
        .then(result => {
          // Accounts successfully linked.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const user = result.user
          setUsuario(user.displayName)
          console.log('Anonymous account successfully upgraded', user)
        })
        .catch(error => {
          console.log('Error upgrading anonymous account', error)
        })
    } else {
      signInWithPopup(auth, provider)
        .then(resultado => {
          const nombre = resultado.user.displayName
          setUsuario(nombre)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return { iniciarSesionConG }
}
