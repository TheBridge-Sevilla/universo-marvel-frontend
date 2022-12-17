import React, { useState } from "react";
import IniciarSesionEmail from "./IniciarSesion"
import { useTranslation } from "react-i18next";
import NuevoUsuario from "./NuevoUsuario";
import { useContextoUsuario } from '../../context/contextoUsuario'
import ContraseñaOlvidada from "../../services/firebase/contraseñaOlvidada";


const FormularioRegistro = () => {
    const { t } = useTranslation();
    const [registrado, setRegistrado] = useState(false);
    const { olvidarContraseña } = useContextoUsuario()

    return (


        <div className="container">
            {registrado && olvidarContraseña ? <ContraseñaOlvidada /> : (registrado && !olvidarContraseña ? <IniciarSesionEmail /> : <NuevoUsuario />)}
            <div onClick={() => setRegistrado(!registrado)}>
                {registrado && olvidarContraseña ? <></> : registrado ? <h5 className='mt-5 pointer'>  <u>{t('crear-cuenta')}</u></h5>
                    : <h5 className='mt-5 pointer'>  <u>Iniciar Sesion</u></h5>}
            </div>
            
        </div>
    );
};

export default FormularioRegistro;