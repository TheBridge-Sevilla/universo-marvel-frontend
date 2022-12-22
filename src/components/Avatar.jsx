import Avatar from '@mui/material/Avatar'
import { useContextoUsuario } from '../context/contextoUsuario'
import { Link } from 'react-router-dom'

export default function BarraAvatar(props) {
  const {usuarioActual} = useContextoUsuario()

  return (
    <Link to='/perfil-usuario'>
    <Avatar
      color='action'
      alt='Google Photo/Initial'
      src={usuarioActual.photoURL}
      referrerPolicy='no-referrer'
      sx={{ width: props.sizes, height: props.sizes }}
    />
    </Link>
  )
}
