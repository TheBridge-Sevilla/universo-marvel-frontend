import { signInAnonymously } from 'firebase/auth'
import { auth } from '../services/firebase/firebase'
import { useContextoUsuario } from '../context/contextoUsuario'
import { useNavigate } from 'react-router-dom'

export default function useSignLikeGuest() {
  const { setUsuario } = useContextoUsuario()
  const navigate = useNavigate()

  const inicioAnonimo = () => {
    signInAnonymously(auth)
      .then(resultado => {
        console.log(resultado)
        setUsuario('invitado')
        navigate('/dashboard')
      })
      .catch(error => {
        console.log(error)
        // ...
      })
  }

  return { inicioAnonimo }
}
