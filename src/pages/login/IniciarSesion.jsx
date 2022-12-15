import React, { useRef } from "react";
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useContextoUsuario } from '../../context/contextoUsuario'
import ContraseñaOlvidada from "../../services/firebase/contraseñaOlvidada"

function IniciarSesion() {
  const emailRef = useRef();
  const contraseñaRef = useRef();

  const iniciarSesion = (email, contraseña,) => {
    signInWithEmailAndPassword(auth, email, contraseña).then(() => {
      setUsuario(auth.currentUser.displayName)
      setCurrentUser(auth.currentUser)
      setDisabledInputName(true)
      setMensaje(t("bienvenido"))
      setTipo("success")
    }).catch((e) => {
      if (e.code == "auth/user-not-found") {
        setMensaje(t("email-no-registrado"))
        setTipo("error")
      }
      if (e.code == "auth/wrong-password") {
        setMensaje(t("contraseña-erronea"))
        setTipo("error")
      }

    })

  }

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const contraseña = contraseñaRef.current.value;
    if (!email || !contraseña) {
      setMensaje(t("campos-obligatorios"))
      setTipo("error")
    }
    if (email && contraseña) {
      iniciarSesion(email, contraseña)
      setVisibleTop(false);
      setDisplayResponsive(false);
    }
  };
  return (
    <Form className='h-100 d-flex flex-column justify-content-center' onSubmit={onSubmit}>
      <h2 className='mb-5'>Iniciar sesion</h2>
      <Form.Group >
        <FloatingLabel label='Email' className='mb-3'>
          <Form.Control type='email' size='lg' placeholder='Email' ref={emailRef} />
        </FloatingLabel>
        <FloatingLabel label='Contraseña' className='mb-3'>
          <Form.Control type='password' size='lg' placeholder='Password' ref={contraseñaRef}/>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className='d-flex justify-content-between mt-3'>
        <a id='forgot-password'>Contraseña olvidada?</a>
      </Form.Group>
      <Button size='lg' className='w-100 mt-5' variant='danger'>
        Iniciar Sesion
      </Button>

    </Form>
  )
}

export default IniciarSesion