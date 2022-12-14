import {
  createUserWithEmailAndPassword,
  updateProfile,
  EmailAuthProvider,
  linkWithCredential,
} from 'firebase/auth'
import { auth } from './firebase'
import { useTranslation } from 'react-i18next'
import { useContextoUsuario } from '../../context/contextoUsuario'

import { useContextoAlert } from './../../context/contextoAlert'
import { useNavigate } from 'react-router-dom'



export const RegistrarUsuario = (nombre, email, contraseña) => {
  const { t } = useTranslation()
  const { usuario, setUsuario } = useContextoUsuario()

  const { setAlert } = useContextoAlert()
  const navigate = useNavigate()

  const { notificacion } = useContextoAlert()


  const registrarUsuario = (email, contraseña, nombre) => {
    if (usuario == 'invitado') {
      const credential = EmailAuthProvider.credential(email, contraseña)
      linkWithCredential(auth.currentUser, credential)
        .then(usercred => {
          const user = usercred.user
          setUsuario(nombre)

          setUsuarioActual(auth.currentUser)
          navigate('/dashboard')
          console.log('Anonymous account successfully upgraded', user)

          console.log(user)
          notificacion(`${t('enlace-cuentas')}, ${nombre}`, 'success')

        })
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: nombre,
          })
        })
        .catch(error => {
          notificacion(error, 'error')
        })
    } else {
      createUserWithEmailAndPassword(auth, email, contraseña)
        .then(() => {
          return updateProfile(auth.currentUser, {
            displayName: nombre,
          })
        })
        .then(() => {
          setUsuario(nombre)
          setUsuarioActual(auth.currentUser)
          navigate('/dashboard')
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
