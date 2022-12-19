import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import { auth } from '../services/firebase/firebase'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'
import { useEffect, useState } from 'react'


export default function AvatarComoponente() {


  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      setAvatar(currentUser.photoURL)
    }
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

  const currentUser = auth.currentUser
  const [avatar, setAvatar] = useState()

  return (
    <Badge badgeContent={<ChangeCircleIcon />}>
      <Avatar
        color='action'
        alt='Google Photo/Initial'
        src={avatar}
        /* onClick={paginaEditarPerfil} */
      />
    </Badge>
  )
}
