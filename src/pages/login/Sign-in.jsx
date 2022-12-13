import React, { useState } from "react";
import IniciarSesion from "./IniciarSesion"
import Registrarse from "../../services/firebase/registrarse"
import { useTranslation } from "react-i18next";
import { Form } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { useSignWithG } from "../../hooks/useSignWithG";


const SignIn = () => {
  const { t } = useTranslation();
  const [registrado, setRegistrado] = useState(false);
  const [contraseñaOlvidada, setContraseñaOlvidada] = useState(false)
  const { iniciarSesionConG } = useSignWithG()

  return (


    <div className="container">
      {registrado && contraseñaOlvidada ? <></> : (registrado && !contraseñaOlvidada ? <IniciarSesion /> : <Registrarse />)}
      <div onClick={() => setRegistrado(!registrado)}>
        {registrado ? <p className="cursor-pointer hover:underline cyan-300">Crear Cuenta</p> : <p className="cursor-pointer hover:underline cyan-300">Ya Tengo Cuenta</p>}
      </div>
      
        <Form.Group className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <Google
        size={40}
        className='d-flex justify-content-center align-items-center mb-5'
        id='google-icon'
        onClick={() => iniciarSesionConG()} 
      />
    </Form.Group>
    </div>
  );
};

export default SignIn;