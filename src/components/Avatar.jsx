import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Avatar from '@mui/material/Avatar'
import { auth } from "../services/firebase/firebase";
import { useContextoUsuario } from '../context/contextoUsuario';

export default function BarraAvatar() {
    const {usuarioActual} = useContextoUsuario()
    const [avatar, setAvatar] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
    useEffect(() => {
        if (usuarioActual && usuarioActual.photoURL) {
            setAvatar(usuarioActual.photoURL)
        }
    }, [auth])
    return (
        <Nav  >

            <Avatar
                color='action'
                alt='Google Photo/Initial'
                src={avatar}
                referrerPolicy="no-referrer"
            />
        </Nav>
    )
}