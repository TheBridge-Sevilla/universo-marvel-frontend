import './Intro.css'
import { Container, Image, Stack } from 'react-bootstrap'
import { Button } from '@mui/material'
import sesionInvitado from "../../services/firebase/sesionInvitada"
import { useContextoUsuario } from '../../context/contextoUsuario'

const Inicio = () => {
    const { inicioAnonimo } = sesionInvitado()
    const {usuario, setPantalla} = useContextoUsuario()

    return (
        <Container
            className='h-100 d-flex flex-column justify-content-around align-items-center m'
            fluid
        >
            <Image src='unio-icon.svg' alt='unio-icon' className='m-5 ' fluid />
            <Container className='d-flex flex-column  justify-content-flex-end m-5'>

                <Button className='mb-5' size='large' onClick={()=>setPantalla('formulario')}>
                    Registrarse
                </Button>
                <Button className='mb-5' size='large' onClick={inicioAnonimo} >
                    Entrar como Invitado
                </Button>
                {usuario ? <button onClick={()=>console.log(usuario)} >Usuario</button>: <></>}
            </Container>

            <h1 className='unio-text text-uppercase'>Unio</h1>
        </Container>
    )
}

export default Inicio
