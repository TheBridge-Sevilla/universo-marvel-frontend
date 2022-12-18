import AvatarUsuario from './AvatarUsuario'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import { useContextoUsuario } from '../context/contextoUsuario'
import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';

export default function BoronVolver() {
  const { pantalla, setPantalla, usuario } = useContextoUsuario()
  const [volver, setVolver] = useState()

  const regresar = () => setPantalla(volver)

  useEffect(() => {
    setVolver(pantalla)
  }, [pantalla])


  return (
    <Nav class='d-flex justify-content-between' >
        <ArrowCircleLeftIcon fontSize='large' onClick={regresar} />
      <AvatarUsuario />
    </Nav>
  )
}
