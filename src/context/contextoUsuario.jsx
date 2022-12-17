import { createContext, useContext, useState } from 'react'

const ContextoUsuario = createContext({})

export const useContextoUsuario = () => useContext(ContextoUsuario)

export const ContextoUsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState('')
  const [olvidarContraseña, setOlvidarContraseña]=useState(false)
  const [pantalla, setPantalla]= useState('')

  const contextValue = {
    usuario,
    setUsuario,
    olvidarContraseña,
    setOlvidarContraseña,
    pantalla,
    setPantalla
  }

  return (
    <ContextoUsuario.Provider value={contextValue}>
      {children}
    </ContextoUsuario.Provider>
  )
}
