import { createContext, useContext, useState, useEffect } from 'react'
import { Snackbar, Alert } from '@mui/material'

const ContextoAlert = createContext({})
const posicion = { vertical: 'top', horizontal: 'right' }

export const useContextoAlert = () => useContext(ContextoAlert)

export const ContextoAlertProvider = ({ children }) => {
  const [mensaje, setMensaje] = useState(undefined)
  const [claseAlert, setClaseAlert] = useState('error')
  const [alertaVisible, setAlertaVisible] = useState(false) // alert,warning,info o success

  const notificacion = (mensaje, clase) => {
    setMensaje(mensaje)
    setClaseAlert(clase)
  }

  useEffect(() => {
    if (mensaje != undefined) {
      setAlertaVisible(true)
    }
    const timer = setTimeout(() => {
      setAlertaVisible(false)
      setMensaje(undefined)
    }, 3000)

    return () => clearTimeout(timer)
  }, [notificacion])

  const contextValue = {
    notificacion,
  }
  console.log(alertaVisible, claseAlert)
  return (
    <ContextoAlert.Provider value={contextValue}>
      <>
        {children}
        <Snackbar
          open={alertaVisible}
          anchorOrigin={{
            vertical: posicion.vertical,
            horizontal: posicion.horizontal,
          }}
        >
          <Alert severity={claseAlert} sx={{ width: '100%' }}>
            {mensaje}
          </Alert>
        </Snackbar>
      </>
    </ContextoAlert.Provider>
  )
}
