import {
  createUserWithEmailAndPassword,
  updateProfile,
  EmailAuthProvider,
  linkWithCredential,
} from 'firebase/auth'
import { auth } from './firebase'
import { useContextoUsuario } from '../../context/contextoUsuario'
import { useContextoAlert } from '../../context/contextoAlert'

export const RegistrarUsuario = (nombre, email, contraseña) => {
  console.log('registrarusuario se renderiza')
  const { usuario, setUsuario } = useContextoUsuario()
  const { notificacion } = useContextoAlert()

  const registrarUsuario = (email, contraseña, nombre) => {
    if (usuario == 'invitado') {
      const credential = EmailAuthProvider.credential(email, contraseña)
      linkWithCredential(auth.currentUser, credential)
        .then(usercred => {
          const user = usercred.user
          setUsuario(nombre)
          console.log('Anonymous account successfully upgraded', user)
        })
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: nombre,
          })
        })
        .catch(error => {
          console.log('Error upgrading anonymous account', error)
        })
    } else {
      createUserWithEmailAndPassword(auth, email, contraseña)
        .then(() => {
          return updateProfile(auth.currentUser, {
            displayName: nombre,
          })
        })
        .catch(e => {
          console.log(e.message)
          notificacion(e.message, 'error')
        })
    }
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (email && contraseña && nombre) {
      registrarUsuario(email, contraseña, nombre)
    }
  }

  return { onSubmit }
}
