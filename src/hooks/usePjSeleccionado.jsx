import { useFetch } from './useFetch'
import { auth } from '../services/firebase/firebase'

export function usePjSeleccionado(id) {
  const url = new URL(import.meta.env.VITE_BASE_URL)
  url.pathname = '/valoraciones'
  url.searchParams.set('idPersonaje', id)
  url.searchParams.set('idUsuario', auth.currentUser.uid)

  const data = useFetch(url.toString())
  console.log(data)
  return data
}
