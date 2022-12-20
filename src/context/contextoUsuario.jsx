import { createContext, useContext, useState } from 'react'

const ContextoUsuario = createContext({})

export const useContextoUsuario = () => useContext(ContextoUsuario)

export const ContextoUsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState('')
  const [usuarioActual, setUsuarioActual] = useState('')
  const [pantalla, setPantalla]= useState('')

  const contextValue = {
    usuario,
    setUsuario,
    usuarioActual,
    setUsuarioActual,
    pantalla,
    setPantalla
  }

  return (
    <ContextoUsuario.Provider value={contextValue}>
      {children}
    </ContextoUsuario.Provider>
  )
}
