import { useState, useEffect } from 'react'

export function getDestacados(aDestacar, tipo, body) {
  const url = `${import.meta.env.VITE_BASE_URL}/valoraciones/${aDestacar}`
  const [imagen, setImagen] = useState()
  const [json, setJson] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: tipo,
      headers: { 'Content-Type': 'application/json' },
      body: body,
    }
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(json => {
        setJson(json)
        setImagen(json[0].imagen)
      })
  }, [])

  return { json, imagen }
}