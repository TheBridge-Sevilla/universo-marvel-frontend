export function animacionLogin() {
  const animacion = {
    initial: {
      opacity: 0,
      x: '-100vw',
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: '100vw',
      scale: 1,
    },
  }

  const transicion = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4,
  }

  return { animacion, transicion }
}
