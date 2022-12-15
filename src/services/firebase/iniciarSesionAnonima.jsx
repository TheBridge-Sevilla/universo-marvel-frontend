import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useContextoUsuario } from '../../context/contextoUsuario'

export function iniciarSesionAnonima() {
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
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid
      // ...
    } else {
      // User is signed out
      // ...
    }
  })

  return { inicioAnonimo }
}
