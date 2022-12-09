import { signInAnonymously ,onAuthStateChanged,GoogleAuthProvider} from "firebase/auth";
import { auth } from "./firebase";
import {useContextoUsuario} from "../contexto/contextoUsuario"
import {useSignOut} from "./useSignOut"
import {useSignWithG} from "./useSignWithG"


export default function RegistroAnonimo(){
const { cerrarSesion } = useSignOut()
const { usuario, setUsuario } = useContextoUsuario();
const { iniciarSesionConG } = useSignWithG()


const inicioAnonimo =()=>{
signInAnonymously(auth)
  .then((resultado) => {
    console.log(resultado)
    setUsuario("invitado")
  })
  .catch((error) => {
    console.log(error)
    // ...
  });
}
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return(
    <div>
        {usuario == "invitado" ? <button onClick={cerrarSesion}>Cerrar Sesion</button> :<button onClick={()=>inicioAnonimo()}>Inicia sesion de Invitado</button>}
        {usuario && usuario!= "invitado" ? <button onClick={cerrarSesion}>Cerrar Sesion</button>  :<button onClick={iniciarSesionConG}>Inicia sesion con google</button>}





    </div>
  )
}