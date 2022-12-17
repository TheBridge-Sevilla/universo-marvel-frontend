import { Snackbar, Alert } from '@mui/material'
import { useEffect } from 'react'
import { useContextoAlert } from '../context/contextoAlert'

export default function Notificacion() {
  const { alert, setAlert } = useContextoAlert()

  const posicion = { vertical: 'top', horizontal: 'right' }
  console.log(alert.mensaje, typeof alert.mensaje)
  console.log(open)

  useEffect(() => {
    if (alert.mensaje != undefined)
      setTimeout(() => {
        setAlert({  open: false, tipo: alert.tipo })
      }, 3000)
  }, [alert.mensaje])
  console.log(alert)

  return (
    <Snackbar
      open={alert.open}
      anchorOrigin={{
        vertical: posicion.vertical,
        horizontal: posicion.horizontal,
      }}
    >
      <Alert severity={alert.tipo} sx={{ width: '100%' }}>
        {alert.mensaje}
      </Alert>
    </Snackbar>
  )
}
