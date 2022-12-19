import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import { useContextoUsuario } from '../context/contextoUsuario'
import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import { auth } from "../services/firebase/firebase";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export default function BarraAvatar() {
const { pantalla, setPantalla, usuario } = useContextoUsuario()
const [volver, setVolver] = useState()
const currentUser = auth.currentUser;
const [avatar, setAvatar] = useState()

useEffect(() => {
if (currentUser && currentUser.photoURL) {
setAvatar(currentUser.photoURL)
}
//setUsuario(currentUser.displayName)

/* const handleChange = (e) => {
if (e.target.files[0]) {
setFoto(e.target.files[0])
setLoading(true)
}

}
const handleClick = () => {
upload(foto, currentUser,)
setLoading(false)

} */
}, [auth])

const regresar = () => setPantalla(volver)

useEffect(() => {
setVolver(pantalla)
}, [pantalla])

return (
<Nav class='d-flex justify-content-between' >
<ArrowCircleLeftIcon fontSize='large' onClick={regresar} />
<Badge badgeContent={<ChangeCircleIcon />}>
<Avatar
color='action'
alt='Google Photo/Initial'
src={avatar}
/* onClick={paginaEditarPerfil} */
/>
</Badge>
</Nav>
)
}
