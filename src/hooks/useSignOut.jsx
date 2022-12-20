import { auth } from '../../firebase/firebase'
import { signOut } from 'firebase/auth'
import { useContextoUsuario } from '../../context/ContextoUsuario'
import { useNavigate } from 'react-router-dom'

export function useSignOut() {
  const { setUsuario,setUsuarioActual } = useContextoUsuario()
  const navigate = useNavigate()

  const cerrarSesion = () => {
    signOut(auth)
      .then(() => {
        setUsuario()
        setUsuarioActual()
        navigate('/inicio')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return { cerrarSesion }
}
