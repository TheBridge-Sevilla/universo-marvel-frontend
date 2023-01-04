export function obtenerPersonajes(setPersonajes,pagina, filtro) {
  
  

  fetchApi()

  async function fetchApi() {
    const data = await fetch(url)
    const json = await data.json()
    console.log(json)
    setPersonajes(json)
  }

}
