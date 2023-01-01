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
  const [masVotados, setMasVotados] = useState([])

  useEffect(() => {
    console.log('clasificacion dentro del useeffect')
    console.log('entra en el useEffect')
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(json => setMasVotados(json))
  }, [])
  console.log(masVotados, 'masVotado')

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
          {masVotados.map(row => (
            <TableRow
              key={row.personaje}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
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
  )
}

export default MasVotado
