import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useState } from 'react'
import { ArrowCounterclockwise, Gear, StarHalf } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import './bottombar.css'

export default function BottomBar() {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
      className="contenedor_barra_navegación"
    >
      <BottomNavigation 
      className='contenedor_navegacion'
      showLabels
        value={value}
        onChange={event => {
          setValue(event.value)
        }}
      >
        <BottomNavigationAction
      className='contenedor_boton_navegacion'

          label='Recents'
          icon={<ArrowCounterclockwise />}
          onClick={() => navigate('introducirDireccion')}
        />
        <BottomNavigationAction
      className='contenedor_boton_navegacion'

          label='Personajes'
          icon={<StarHalf />}
          onClick={() => navigate('introducirDireccion')}
        />
        <BottomNavigationAction
      className='contenedor_boton_navegacion'

          label='Ajustes'
          icon={<Gear />}
          onClick={() => navigate('/iniciar-sesion')}
        />
      </BottomNavigation>
    </Paper>
  )
}
