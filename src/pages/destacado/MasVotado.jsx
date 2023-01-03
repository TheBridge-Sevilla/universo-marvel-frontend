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

function MasVotado() {
  const { t } = useTranslation()
  const url = `${import.meta.env.VITE_BASE_URL}/valoraciones/destacado`
  const [masVotados, setMasVotados] = useState([])
  const [imagen, setImagen] = useState()
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(json => {
        setMasVotados(json)
        setImagen(json[0].imagen)
      })
  }, [])

  return (
    <Container className='d-flex-column mt-5 mb-5'>
      <p>{t('Tu personaje mas votado')}</p>
      <TableContainer className='mt-2 mb-5' component={Paper}>
        <Image alt='mas-votado' className='img-thumbnail' src={imagen}></Image>
        <Table sx={{ maxWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>{t('Personaje')}</TableCell>
              <TableCell align='center'>{t('Valoración')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {masVotados.map(row => (
              <TableRow
                key={row.personaje}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {' '}
                {masVotados.indexOf(row) + 1}
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

export default MasVotado
