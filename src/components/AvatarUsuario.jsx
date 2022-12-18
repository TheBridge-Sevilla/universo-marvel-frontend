import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import { useContextoUsuario } from '../context/contextoUsuario'
import { auth } from "../services/firebase/firebase";
import {useState, useEffect} from 'react';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

function AvatarUsuario() {
  //const {usuario, setUsuario} = useContextoUsuario()

  const currentUser = auth.currentUser;
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      setAvatar(currentUser.photoURL)
    }
    //setUsuario(currentUser.displayName)

/*     const handleChange = (e) => {
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
  return (
    <Badge badgeContent={<ChangeCircleIcon />}>
      <Avatar
        color='action'
        alt='Google Photo/Initial'
        src={avatar}
/*         onClick={paginaEditarPerfil} */
      />
    </Badge>
  )
}
export default AvatarUsuario
