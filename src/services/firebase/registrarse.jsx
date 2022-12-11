import { React, useRef, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  EmailAuthProvider,
  linkWithCredential,
} from 'firebase/auth'
import { auth } from './firebase'
import { useContextoUsuario } from '../../context/ContextoUsuario'

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
    }
    if (email && contraseña && nombre) {
      registrarUsuario(email, contraseña, nombre)
    }
  }

  return (
    <div className="form flex flex-column">
      <form
        className="flex flex-column justify-content-center align-items-center"
        onSubmit={onSubmit}
      >
        <h1 className="text-blue-600">crear cuenta</h1>
        <input
          className="my-1 w-11 md:w-9 lg:w-6 lg:my-2"
          placeholder="Email"
          type="email"
          ref={emailRef}
        />
        <input
          className="my-1 w-11 md:w-9 lg:w-6 lg:my-2"
          placeholder="nombre"
          type="name"
          ref={nombreRef}
        />
        <input
          className="my-1 w-11 md:w-9 lg:w-6 lg:my-2"
          type="password"
          placeholder="contraseña"
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button className="my-2 font-bold" type="submit">
          Registrarse
        </button>
      </form>
      <button onClick={() => console.log(usuario)}>
        mostrar nombre de usuario
      </button>
    </div>
  )
}
export default Registrarse
