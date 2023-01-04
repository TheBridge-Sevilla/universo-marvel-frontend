import Avatar from '@mui/material/Avatar'
import { useContextoUsuario } from '../context/contextoUsuario'

export default function BarraAvatar(props) {
  const { imagenPerfil } = useContextoUsuario()
  return (
    <Avatar
      color='action'
      alt='Google Photo/Initial'
      src={imagenPerfil}
      referrerPolicy='no-referrer'
      sx={{ width: props.sizes, height: props.sizes }}
    />
  )
}
