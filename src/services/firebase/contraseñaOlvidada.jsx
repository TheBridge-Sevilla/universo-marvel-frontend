import React, { useRef } from 'react'
import { auth } from "./firebase"
import { sendPasswordResetEmail } from "firebase/auth";
import { Button, FloatingLabel, Form } from 'react-bootstrap';

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
    <>
      <FloatingLabel label='Email' className='mb-3'>
        <Form.Control type='email' size='lg' placeholder='Email' ref={emailRef} />
      </FloatingLabel>
      <button
        className="my-1 mx-4"
        onClick={forgotPasswordHandler}>
        {t("recuperar-contraseña")}
      </button>
    </>
  )
}
