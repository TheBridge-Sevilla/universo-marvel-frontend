import { useFetch } from './useFetch'

export function useValoracionPersonal(personaje, usuario) {
  const url = new URL(import.meta.env.VITE_BASE_URL)
  url.pathname = '/valoraciones'
  url.searchParams.set('idPersonaje', personaje)
  url.searchParams.set('idUsuario', usuario)

  const tuValoracion = useFetch(url.toString())

  return tuValoracion
}
