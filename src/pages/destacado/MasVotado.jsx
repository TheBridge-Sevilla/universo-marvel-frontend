import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
//import { useTranslation } from "react-i18next";

function MasVotado() {
  //const { i18n } = useTranslation();
  const url = 'http://localhost:3050/valoraciones/destacado' //`${import.meta.env.VITE_BASE_URL}/valoraciones/favoritos`
  const [masVotado, setMasVotado] = useState([])

  useEffect(() => {
    console.log('clasificacion dentro del useeffect')
    console.log('entra en el useEffect')
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(json => setMasVotado(json))
  }, [])
  console.log(masVotado, 'masVotado')

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align='center'>Personaje</TableCell>
            <TableCell align='center'>Valoración</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {masVotado.map(row => (
            <TableRow
              key={row.personaje}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {' '}
              {masVotado.indexOf(row) + 1}
              <TableCell align='center'>{row.personaje}</TableCell>
              <TableCell align='center'>{row.valoracion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MasVotado
