import { createContext, useContext, useState } from 'react'
import useLocalStorage from 'use-local-storage'

const ContextoUsuario = createContext({})

export const useContextoUsuario = () => useContext(ContextoUsuario)

export const ContextoUsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState('')
  const [usuarioActual, setUsuarioActual] = useState('')
  const [pantalla, setPantalla] = useState('')
  const defaultRecordar = window.matchMedia(
    '(recordar-usuario: no-recordar)'
  ).matches
  const [isRecordarLocal, setIsRecordarLocal] = useLocalStorage(
    'isRecordar',
    defaultRecordar ? 'no-recordar' : 'recordar'
  )
  const [imagenPerfil, setImagenPerfil] = useState('')

  const switchRecordar = () => {
    const newRecodar =
      isRecordarLocal === 'recordar' ? 'no-recordar' : 'recordar'
    setIsRecordarLocal(newRecodar)
  }
  const defaultDark = window.matchMedia('(prefers-color-scheme: true)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'true' : 'false'
  )
  const defaultIdioma = window.matchMedia('(idioma: es)').matches
  const [idioma, setIdioma] = useLocalStorage(
    'idioma',
    defaultIdioma ? 'es' : 'en'
  )

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
    theme,
    setTheme,
    idioma,
    setIdioma,
  }


  return (
    <ContextoUsuario.Provider value={contextValue}>
      {children}
    </ContextoUsuario.Provider>
  )
}
