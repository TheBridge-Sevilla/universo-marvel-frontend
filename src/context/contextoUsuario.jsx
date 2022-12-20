import { createContext, useContext, useState } from 'react'
import useLocalStorage from 'use-local-storage'


const ContextoUsuario = createContext({})

export const useContextoUsuario = () => useContext(ContextoUsuario)

export const ContextoUsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState('')
  const [usuarioActual, setUsuarioActual] = useState('')
  const [pantalla, setPantalla] = useState('')
  const defaultRecordar = window.matchMedia('(recordar-usuario: no-recordar)').matches
  const [isRecordarLocal, setIsRecordarLocal] = useLocalStorage(
    'isRecordar',
    defaultRecordar ? 'no-recordar' : 'recordar'
  )

  const switchRecordar = () => {
    const newRecodar = isRecordarLocal === 'recordar' ? 'no-recordar' : 'recordar'
    setIsRecordarLocal(newRecodar)
  }


  const contextValue = {
    usuario,
    setUsuario,
    usuarioActual,
    setUsuarioActual,
    pantalla,
    setPantalla,
    isRecordarLocal,
    setIsRecordarLocal,
    switchRecordar
  }

  return (
    <ContextoUsuario.Provider value={contextValue}>
      {children}
    </ContextoUsuario.Provider>
  )
}
