import { createContext, useContext, useState } from 'react'
import useLocalStorage from 'use-local-storage'


const ContextoUsuario = createContext({})

export const useContextoUsuario = () => useContext(ContextoUsuario)

export const ContextoUsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState('')
  const [usuarioActual, setUsuarioActual] = useState('')
  const [pantalla, setPantalla] = useState('')
  const [isIndice, setIsIndice] = useState('')
  const [personajes, setPersonajes] = useState('')
  const [valoraciones, setValoraciones] = useState('')
  const defaultRecordar = window.matchMedia('(recordar-usuario: no-recordar)').matches
  const [isRecordarLocal, setIsRecordarLocal] = useLocalStorage(
    'isRecordar',
    defaultRecordar ? 'no-recordar' : 'recordar'
  )
  const [imagenPerfil, setImagenPerfil] = useState('')

  const switchRecordar = () => {
    const newRecodar = isRecordarLocal === 'recordar' ? 'no-recordar' : 'recordar'
    setIsRecordarLocal(newRecodar)
  }
  const defaultDark = window.matchMedia('(prefers-color-scheme: true)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'true' : 'false'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
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
    switchRecordar,
    imagenPerfil,
    setImagenPerfil,
    personajes,
    setPersonajes,
    valoraciones,
    setValoraciones,
    isIndice,
    setIsIndice,
    theme,
    setTheme,
    switchTheme
  }

  return (
    <ContextoUsuario.Provider value={contextValue}>
      {children}
    </ContextoUsuario.Provider>
  )
}
