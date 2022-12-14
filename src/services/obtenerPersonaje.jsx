import { useState, useEffect } from 'react'

export function obtenerPersonajes() {
  const [pagina, setPagina] = useState(1)
  const [paginacion, setPaginacion] = useState({limit: 10})
  const [personajesData, setPersonajesData] = useState([])
  const url = `${import.meta.env.VITE_BASE_URL}/personajes?page=${pagina}`
  async function fetchApi() {
    const data = await fetch(url)
    const json = await data.json()
    setPersonajesData(json.docs)
    setPaginacion(json)
  }

  useEffect(() => {
    fetchApi().catch(error => console.log(error))
  }, [pagina])

  return { personajesData, pagina, setPagina, paginacion }
}
