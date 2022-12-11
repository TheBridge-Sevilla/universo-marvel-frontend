import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { useContextoUsuario } from "../../context/ContextoUsuario"

export function useSignOut() {
    const { setUsuario } = useContextoUsuario();


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