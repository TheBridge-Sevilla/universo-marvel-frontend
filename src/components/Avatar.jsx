import Avatar from '@mui/material/Avatar'

export default function BarraAvatar(props) {
  return (
    <Avatar
      color='action'
      alt='Google Photo/Initial'
      src={props.imagenPerfil}
      referrerPolicy='no-referrer'
      sx={{ width: props.sizes, height: props.sizes }}
    />
  )
}
