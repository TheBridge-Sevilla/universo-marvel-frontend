import { createContext, useContext, useState } from 'react'

const ContextoAlert = createContext({})

export const useContextoAlert = () => useContext(ContextoAlert)

export const ContextoAlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    mensaje: undefined,
    open: false,
    tipo: 'info',
  })

  const contextValue = {
    alert,
    setAlert,
  }

  return (
    <ContextoAlert.Provider value={contextValue}>
      {children}
    </ContextoAlert.Provider>
  )
}
