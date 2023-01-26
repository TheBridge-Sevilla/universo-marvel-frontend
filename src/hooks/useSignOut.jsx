import { auth } from '../services/firebase/firebase'
import { signOut } from 'firebase/auth'
import { useContextoUsuario } from '../context/contextoUsuario'
import { useNavigate } from 'react-router-dom'
import { useContextoAlert } from '../context/contextoAlert'
import { useTranslation } from 'react-i18next'

export function useSignOut() {
  const { setUsuario, setUsuarioActual } = useContextoUsuario()
  const { notificacion } = useContextoAlert()
  const { t } = useTranslation()

  const navigate = useNavigate()

  const cerrarSesion = () => {
    signOut(auth)
      .then(() => {
        setUsuario()
        setUsuarioActual()
        navigate('/inicio')
        notificacion(`${t('sesion-cerrada')}`)
      })
      .catch(error => {
        notificacion(error, 'error')
      })
  }

  return { cerrarSesion }
}
