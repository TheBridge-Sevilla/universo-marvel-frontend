import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useTranslation } from 'react-i18next'
import { Container, Image } from 'react-bootstrap'

function Favorito() {
  const { t } = useTranslation()
  const url = `${import.meta.env.VITE_BASE_URL}/valoraciones/favoritos`
  const [favoritos, setFavoritos] = useState([])
  const [imagen, setImagen] = useState()
  let idUsuario = 'y6dtb1y23oMn00AAFcgjdhSbbhi2' //prueba
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idUsuario: idUsuario }),
    }
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(json => {
        setFavoritos(json)
        setImagen(json[0].imagen)
      })
  }, [])

  return (
    <Container className='d-flex-column'>
      <p>{t('Tu personaje favorito')}</p>
      <TableContainer component={Paper} mt-2>
        <Image alt='favorito' class='img-thumbnail' src={imagen}></Image>
        <Table sx={{ maxWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align='center'>{t('Personaje')}</TableCell>
              <TableCell align='center'>{t('Valoración')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favoritos.map(row => (
              <TableRow
                key={row.personaje}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {' '}
                {favoritos.indexOf(row) + 1}
                <TableCell align='center'>{row.personaje}</TableCell>
                <TableCell align='center'>{row.valoracion}</TableCell>
                <TableCell align='center'>
                  <img width={20} src={row.imagen}></img>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Favorito
