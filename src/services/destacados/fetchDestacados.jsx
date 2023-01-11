import { useState, useEffect } from 'react'

export function fetchDestacados(aDestacar, tipo, body) {
  const url = `${import.meta.env.VITE_BASE_URL}/valoraciones/${aDestacar}`
  const [json, setJson] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: tipo,
      headers: { 'Content-Type': 'application/json' },
      body: body,
    }
    try {
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => {
          setJson(json)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return { json }
}
