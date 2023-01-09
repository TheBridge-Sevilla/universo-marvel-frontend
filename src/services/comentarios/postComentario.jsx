import { auth } from '../firebase/firebase'

export function postComentario(comentario, personaje) {
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
      comentario: comentario,
      personaje: personaje._id,
    }),
  })
}
