import { useEffect, useState } from 'react'
import { useFetch } from './useFetch'
import { useContextoUsuario } from '../context/contextoUsuario'

export function usePersonajes(pagina, filtro) {
  const url = new URL(import.meta.env.VITE_BASE_URL)
  url.pathname = '/personajes'
  url.searchParams.set('page', pagina)
  url.searchParams.set('limit', import.meta.env.VITE_PAGINATION_LIMIT)
  url.searchParams.set('filter', filtro)

  const data = useFetch(url.toString())
  const [personajesData, setPersonajesData] = useState()
  const [filtradosData, setFiltradosData] = useState()
  const [valoracionesData, setValoracionesData] = useState()
  const { setPersonajes } = useContextoUsuario()

  useEffect(() => {
    if (data) {
      if (filtro) {
        setFiltradosData(data.personajes)
        setPersonajes(data.personajes)
        setValoracionesData(data.valoraciones)
      } else {
        setPersonajesData(data.personajes)
        setPersonajes(data.personajes)
        setValoracionesData(data.valoraciones)
      }
    }
  }, [url])

  return { personajesData, filtradosData, valoracionesData }
}
