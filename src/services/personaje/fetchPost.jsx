import { auth } from '../firebase/firebase'

export function fetchPost() {
  const postComentario = (comentario, personaje) => {
    const url = `${import.meta.env.VITE_BASE_URL}/comentarios?personaje=${
      personaje._id
    }`

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        autor: auth.currentUser.displayName,
        personaje: personaje._id,
        comentario: comentario,
      }),
    })
  }

  const postValoracion = (personaje, valoracion) => {
    const url = `${import.meta.env.VITE_BASE_URL}/valoraciones?personaje=${
      personaje.name
    }`
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

  return { postComentario, postValoracion }
}
