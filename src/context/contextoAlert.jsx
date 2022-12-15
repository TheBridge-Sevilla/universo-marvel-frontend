import { createContext, useContext, useState } from 'react'

const ContextoAlert = createContext({})

export const useContextoAlert = () => useContext(ContextoAlert)

export const ContextoAlertProvider = ({ children }) => {
  const [mensaje, setMensaje] = useState('')
  const [tipo, setTipo] = useState('')

  const contextValue = {
    mensaje,
    setMensaje,
    tipo,
    setTipo,
  }

  return (
    <ContextoAlert.Provider value={contextValue}>
      {children}
    </ContextoAlert.Provider>
  )
}
