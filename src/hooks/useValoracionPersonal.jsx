import { useFetch } from './useFetch'
import { auth } from '../services/firebase/firebase'

export function useValoracionPersonal(personaje) {
  const url = new URL(import.meta.env.VITE_BASE_URL)
  url.pathname = '/valoraciones'
  url.searchParams.set('idPersonaje', personaje._id)
  url.searchParams.set('idUsuario', auth.currentUser.uid)

  const tuValoracion = useFetch(url.toString())

  const postValoracion = valoracion => {
    const url = new URL(import.meta.env.VITE_BASE_URL)
    url.pathname = '/valoraciones'
    url.searchParams.set('personaje', personaje.name)

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idUsuario: auth.currentUser != null ? auth.currentUser.uid : undefined,
        valoracion: valoracion,
        idPersonaje: personaje._id,
      }),
    })
  }

  return { tuValoracion, postValoracion }
}
