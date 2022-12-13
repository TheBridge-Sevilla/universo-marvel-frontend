import { React, useRef, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  EmailAuthProvider,
  linkWithCredential,
} from 'firebase/auth'
import { auth } from './firebase'
import { useContextoUsuario } from '../../context/contextoUsuario'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { Google } from 'react-bootstrap-icons'

const Registrarse = () => {
  const emailRef = useRef()
  const nombreRef = useRef()
  const [contraseña, setContraseña] = useState()
  const { usuario, setUsuario } = useContextoUsuario()

  const registrarUsuario = (email, contraseña, nombre) => {
    if (usuario == 'invitado') {
      const credential = EmailAuthProvider.credential(email, contraseña)
      linkWithCredential(auth.currentUser, credential)
        .then((usercred) => {
          const user = usercred.user
          setUsuario(nombre)
          console.log('Anonymous account successfully upgraded', user)
        })
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: nombre,
          })
        })
        .catch((error) => {
          console.log('Error upgrading anonymous account', error)
        })
    } else {
      createUserWithEmailAndPassword(auth, email, contraseña)
        .then(() => {
          return updateProfile(auth.currentUser, {
            displayName: nombre,
          })
        })
        .catch((e) => {
          if (e.code == 'auth/email-already-in-use') {
            setMensaje(t('email-registrado'))
            setTipo('error')
          }
          if (e.code == 'auth/weak-password') {
            setMensaje(t('contraseña-corta'))
            setTipo('error')
          }
        })
        .then(() => {
          setUsuario(auth.currentUser.displayName)
        })
    }
  }

  async function onSubmit(e) {
    e.preventDefault()
    const email = emailRef.current.value
    const nombre = nombreRef.current.value

    if (!email || !contraseña || !nombre) {
      console.log("submit funciona falta datos")
    }
    if (email && contraseña && nombre) {
      registrarUsuario(email, contraseña, nombre)
      console.log("submit funciona")
    }
  }

  return (
    <Form className='h-100 d-flex flex-column justify-content-center' onSubmit={onSubmit}>
    <h2 className='mb-5'>Registrarse</h2>
    <Form.Group >
      <FloatingLabel label='Usuario' className='mb-3'>
        <Form.Control type='text' size='lg' placeholder='Usuario' ref={nombreRef}/>
      </FloatingLabel>
      <FloatingLabel label='Email' className='mb-3'>
        <Form.Control type='email' size='lg' placeholder='Email' ref={emailRef}/>
      </FloatingLabel>
      <FloatingLabel label='Contraseña' className='mb-3'>
        <Form.Control type='password' size='lg' placeholder='Password' onChange={(e) => setContraseña(e.target.value)} />
      </FloatingLabel>
    <Button size='lg' className='w-100 mt-5' variant='danger' type="submit">
      Crear Cuenta
    </Button>
    </Form.Group>

  </Form>
  )
}
export default Registrarse
