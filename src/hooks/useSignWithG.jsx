import {
  signInWithPopup,
  GoogleAuthProvider,
  linkWithPopup,
} from 'firebase/auth'
import { auth } from '../services/firebase/firebase'
import { useTranslation } from 'react-i18next'
import { useContextoUsuario } from '../context/contextoUsuario'
import { useNavigate } from 'react-router-dom'
import { useContextoAlert } from '../context/contextoAlert'

export function useSignWithG() {

  const { usuario, setUsuario , setUsuarioActual} = useContextoUsuario()

  const { t } = useTranslation()

  const { notificacion } = useContextoAlert()

  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()

  const iniciarSesionConG = () => {
    if (usuario == 'invitado') {
      linkWithPopup(auth.currentUser, provider)
        .then(result => {
          // Accounts successfully linked.
          const nombre = result.user
          setUsuario(nombre)
          navigate('/dashboard')
          notificacion(`${t('enlace-cuentas')},${nombre}`, 'success')
        })
        .catch(error => {
          notificacion(error, 'error')
        })
    } else {
      signInWithPopup(auth, provider)
        .then(resultado => {
          const nombre = resultado.user.displayName
          setUsuario(nombre)
          setUsuarioActual(resultado.user)
          navigate('/dashboard')
          notificacion(`${'bienvenido'}, ${nombre}`, 'success')
        })
        .catch(error => {
          notificacion(error, 'error')
        })
    }
  }

  return { iniciarSesionConG }
}
