import { MD5 } from 'crypto-js'
import { useEffect, useState } from 'react'

export function getComics(personaje) {
  const timestamp = Date.now()
  const apikey = import.meta.env.VITE_MARVEL_KEY
  const privateKey = import.meta.env.VITE_PRIVATE_KEY
  const publicKey = import.meta.env.VITE_PUBLIC_KEY
  const hash = MD5(`${timestamp}${privateKey}${publicKey}`)

  const url = new URL('https://gateway.marvel.com/')
  url.pathname = `/v1/public/characters/${personaje.Id}/comics`
  url.searchParams.set('apikey', apikey)
  url.searchParams.set('ts', timestamp)
  url.searchParams.set('hash', hash)

  const [comics,setComics] = useState()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setComics(data.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return comics
}
