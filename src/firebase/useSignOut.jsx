import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import {useContextoUsuario} from "../contexto/contextoUsuario"

export function useSignOut() {
    const {  setUsuario } = useContextoUsuario();


    const cerrarSesion = () => {
        signOut(auth).then(() => {
            setUsuario()
        }
        )
            .catch((error) => {
                console.log(error)
            })
    }
    
    return { cerrarSesion }
}