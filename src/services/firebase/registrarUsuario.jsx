import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  EmailAuthProvider,
  linkWithCredential,
} from 'firebase/auth'
import { auth } from './firebase'
import { useTranslation } from 'react-i18next'
import { useContextoUsuario } from '../../context/contextoUsuario'

export const RegistrarUsuario = (nombre, email, contraseña) => {
  const { t } = useTranslation()
  const { usuario, setUsuario } = useContextoUsuario()
  // eslint-disable-next-line no-unused-vars
  const [mensaje, setMensaje] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [tipo, setTipo] = useState('')

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
          if (e.code == 'auth/email-already-in-use') {
            setMensaje(t('email-registrado'))
            setTipo('error')
          }
          if (e.code == 'auth/weak-password') {
            setMensaje(t('contraseña-corta'))
            setTipo('error')
          }
        })
        .then(() => {
          setUsuario(auth.currentUser.displayName)
          console.log(auth.currentUser)
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
