import { useContextoUsuario } from '../../context/contextoUsuario'
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'
import { auth } from '../../services/firebase/firebase'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useContextoAlert } from '../../context/contextoAlert'

export const IniciarSesion = (email, contraseña) => {
  const { t } = useTranslation()
  const { usuario, setUsuario } = useContextoUsuario()
  const { notificacion } = useContextoAlert()

  const navigate = useNavigate()
  const iniciarSesionEmail = (email, contraseña) => {
    signInWithEmailAndPassword(auth, email, contraseña)
      .then(() => {
        setUsuario(auth.currentUser.displayName)
        navigate('/dashboard')
        notificacion(`${t('bienvenido')}, ${usuario}`, 'info')
      })
      .catch(e => {
        console.log(e.code)
        notificacion(e.message, 'error')
      })
  }
  console.log(usuario)
  const recuerdame = () => {
      setPersistence(auth, browserLocalPersistence)
  }

  const onSubmit = e => {
    e.preventDefault()

    if (!email || !contraseña) {
      console.log('rellena los datos')
      notificacion('rellena los datos', 'warning')
    }
    if (email && contraseña) {
      iniciarSesionEmail(email, contraseña)
    }
  }

  return { onSubmit, recuerdame }
}
