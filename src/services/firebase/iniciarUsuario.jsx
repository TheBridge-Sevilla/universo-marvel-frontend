import { useTranslation } from 'react-i18next'
import { useContextoUsuario } from '../../context/contextoUsuario'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase/firebase'

export const  IniciarSesion=(email,contraseña) =>{
  const { t } = useTranslation()
  const {  usuario,setUsuario } = useContextoUsuario()


   const iniciarSesionEmail = (email, contraseña,) => {
    signInWithEmailAndPassword(auth, email, contraseña).then(() => {
      setUsuario(auth.currentUser.displayName)


    }).catch((e) => {
      if (e.code == "auth/user-not-found") {

      }
      if (e.code == "auth/wrong-password") {

      }

    })

  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !contraseña) {
      console.log("rellena los datos")

    }
    if (email && contraseña){
      iniciarSesionEmail(email, contraseña)

    } 
  };
  return{onSubmit}
}
