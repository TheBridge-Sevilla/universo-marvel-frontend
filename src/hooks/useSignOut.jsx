import { auth } from '../../firebase/firebase'
import { signOut } from 'firebase/auth'
import { useContextoUsuario } from '../../context/ContextoUsuario'
import { useNavigate } from 'react-router-dom'
import { useContextoAlert } from '../context/contextoAlert'

export function useSignOut() {
  const { setUsuario } = useContextoUsuario()
  const { notificacion } = useContextoAlert()
  const navigate = useNavigate()

  const cerrarSesion = () => {
    signOut(auth)
      .then(() => {
        setUsuario()
        navigate('/inicio')
      })
      .catch(error => {
        notificacion(error, 'error')
      })
  }

  return { cerrarSesion }
}
