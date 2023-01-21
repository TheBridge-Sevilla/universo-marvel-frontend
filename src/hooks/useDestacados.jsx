import { useFetch } from './useFetch'

export function useDestacados() {
  const url = new URL(import.meta.env.VITE_BASE_URL)
  url.pathname = '/valoraciones/destacado'

  const masVotadosData = useFetch(url.toString())

  return { masVotadosData }
}
