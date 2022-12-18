import { useContextoUsuario } from '../../context/contextoUsuario'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase/firebase'
import { useNavigate } from 'react-router-dom'

export const IniciarSesion = (email, contraseña) => {
  const { usuario, setUsuario } = useContextoUsuario()
  const navigate = useNavigate()
  const iniciarSesionEmail = (email, contraseña) => {
    signInWithEmailAndPassword(auth, email, contraseña)
      .then(() => {
        setUsuario(auth.currentUser.displayName)
        navigate('/dashboard')
      })
      .catch(e => {
        console.log(e.code)
      })
  }
  console.log(usuario)

  const onSubmit = e => {
    e.preventDefault()

    if (!email || !contraseña) {
      console.log('rellena los datos')
    }
    if (email && contraseña) {
      iniciarSesionEmail(email, contraseña)
    }
  }

  return { onSubmit }
}
