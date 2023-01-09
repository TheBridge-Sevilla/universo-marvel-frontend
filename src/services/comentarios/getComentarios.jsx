import { useEffect, useState } from "react"

function getComentarios() {
    const [comentarios, setComentarios] = useState([])
  useEffect(() => {
    const url = `${
      import.meta.env.VITE_BASE_URL
    }/personajes?page=${pagina}&limit=${
      import.meta.env.VITE_PAGINATION_LIMIT
    }&filter=${filtro}`

    fetch(url)
      .then(data => data.json())
      .then(json => {

        setValoraciones(json.valoraciones)
        window.localStorage.setItem(
          'personajes',
          JSON.stringify(json.personajes)
        )
        window.localStorage.setItem(
          'valoraciones',
          JSON.stringify(json.valoraciones)
        )
      })


    setPagina(1)
  }, [filtro])
  return <div>getComentarios</div>
}

export default getComentarios
