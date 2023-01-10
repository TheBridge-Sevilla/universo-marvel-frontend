import { useState, useEffect } from 'react'

export function getComentarios(personaje) {
  const url = `${import.meta.env.VITE_BASE_URL}/comentarios?personaje=${
    personaje._id
  }`

  const [json, setJson] = useState([])

  useEffect(() => {
    try {
      fetch(url)
        .then(response => response.json())
        .then(json => setJson(json))
    } catch (error) {
      console.log(error)
    }
  }, [])
  return { json }
}
