import { useEffect, useState } from 'react'
import { useFetch } from './useFetch'
import { auth } from '../services/firebase/firebase'

export function useDestacados() {
  const url = new URL(import.meta.env.VITE_BASE_URL)
  url.pathname = '/valoraciones/destacado'

  const urlFavoritos = new URL(import.meta.env.VITE_BASE_URL)
  url.pathname = '/valoraciones/favoritos'

  const destacadosData = useFetch(url.toString())
  const [favoritosData, setFavoritosData] = useState()

  useEffect(() => {
    const requestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idUsuario: auth.currentUser.uid }),
    }

    async function fetchFavoritos() {
      try {
        fetch(urlFavoritos, requestOptions)
          .then(response => response.json())
          .then(json => {
            return json
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchFavoritos.then(json => setFavoritosData(json))
  }, [])

  return { destacadosData, favoritosData }
}
