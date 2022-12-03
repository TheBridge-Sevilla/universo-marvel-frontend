import React, { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"




const IniciarSesion = () => {

  const emailRef = useRef();
  const contraseñaRef = useRef();



  const iniciarSesion = (email, contraseña,) => {
    signInWithEmailAndPassword(auth, email, contraseña).then(() => {

    }).catch((e) => {
      if (e.code == "auth/user-not-found") {

      }
      if (e.code == "auth/wrong-password") {

      }

    })

  }

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const contraseña = contraseñaRef.current.value;
    if (!email || !contraseña) {

    }
    if (email && contraseña){

    } 
  };

  return (
        <></>
  );
};

export default IniciarSesion;