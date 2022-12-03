import { signInWithPopup, GoogleAuthProvider, linkWithCredential } from "firebase/auth";
import { auth } from "./firebase";

export function useSignWithG() {
    

    const provider = new GoogleAuthProvider();
    const iniciarSesionConG = () => {
        const pending = new GoogleAuthProvider(auth.id_token)
        console.log('pending', pending)
        signInWithPopup(auth, provider).then(() => {
        })
            .catch((error) => {
                console.log(error)
            }).then(() => {
                linkWithCredential(auth.currentUser, pending)
                    .then((usercred) => {
                        console.log('usercred', usercred)
                        const user = usercred.user;
                        console.log("Anonymous account successfully upgraded", user);
                    }).catch((error) => {
                        console.log("Error upgrading anonymous account", error);
                    });
            })

    }

    return { iniciarSesionConG }

}