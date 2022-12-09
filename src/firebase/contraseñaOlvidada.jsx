import React, { useRef } from 'react'
import { auth } from "./firebase"
import { sendPasswordResetEmail } from "firebase/auth";

export default function ContraseñaOlvidada() {
  const emailRef = useRef();


  const contraseñaOlvidada = (email) => {
    sendPasswordResetEmail(auth, email).then(() => {

    })
      .catch((e) => {
        if (e.code == "auth/user-not-found") {

        }
        if (e.code == "auth/invalid-email") {

        }

      })
  }

  const forgotPasswordHandler = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    if (!email) {

    } else if (email) {
      contraseñaOlvidada(email)

    }
  }

  return (
    <></>
  )
}
