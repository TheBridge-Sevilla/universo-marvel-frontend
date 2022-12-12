import React from 'react'
import { Container, Image } from 'react-bootstrap'
import AvatarUsuario from './AvatarUsuario'

export default function Destacados() {
  return (
    <Container className="d-flex-column justify-content-center">
      <AvatarUsuario />

      <p>Tu personaje favorito</p>
      <Image type="image/svg+xml" src="../../public/favorito.svg"></Image>

      <p>Tu personaje más votado</p>
      <Image src="../../public/votado.svg"></Image>
    </Container>
  )
}
