import { signInAnonymously } from 'firebase/auth'
import { auth } from '../services/firebase/firebase'
import { useContextoUsuario } from '../context/contextoUsuario'
import { useNavigate } from 'react-router-dom'
import { useContextoAlert } from '../context/contextoAlert'


export default function useSignLikeGuest() {
  const { setUsuario } = useContextoUsuario()
  const { notificacion } = useContextoAlert()
  const navigate = useNavigate()

  const inicioAnonimo = () => {
    signInAnonymously(auth)
      .then(resultado => {
        setUsuario('invitado')
        navigate('/dashboard')
        notificacion('disfruta de la experiencia' , 'info')
      })
      .catch(error => {
        notificacion(error, 'error')
        // ...
      })
  }

  return { inicioAnonimo }
}
