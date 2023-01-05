import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Image from 'react-bootstrap/Image'
import { useTranslation } from 'react-i18next'

export function Tabla({ imagen, destacados }) {
  const { t } = useTranslation()

  return (
    <TableContainer className='mt-2 mb-5' component={Paper}>
      <Image alt={destacados} className='img-thumbnail' src={imagen}></Image>
      <Table sx={{ maxWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='center'>{t('Personaje')}</TableCell>
            <TableCell align='center'>{t('Valoración')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {destacados.map(row => (
            <TableRow
              key={row.personaje}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {' '}
              {destacados.indexOf(row) + 1}
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
