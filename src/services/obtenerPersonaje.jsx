export function obtenerPersonajes(setPersonajes,pagina, filtro) {
  
  const url = `${import.meta.env.VITE_BASE_URL}/personajes?page=${pagina}&limit=${import.meta.env.VITE_PAGINATION_LIMIT}&filter=${filtro}`

  fetchApi()

  async function fetchApi() {
    const data = await fetch(url)
    const json = await data.json()
    setPersonajes(json)
  }

}
