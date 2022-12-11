import { useState, useEffect } from 'react'

export function obtenerPersonajes() {
  const [pagina, setPagina] = useState(1)
  const url = `${import.meta.env.VITE_BASE_URL}/personajes?page=${pagina}`
  const [personajesData, setPersonajesData] = useState([])

  async function fetchApi() {
    const data = await fetch(url)
    const json = await data.json()
    setPersonajesData(json.docs)
  }

  useEffect(() => {
    fetchApi().catch((error) => console.log(error))
  }, [pagina])

  return { personajesData, pagina, setPagina }
}
