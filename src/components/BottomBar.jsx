import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useState } from 'react'
import { ArrowCounterclockwise, Gear, StarHalf } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

export default function BottomBar() {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={event => {
          setValue(event.value)
        }}
      >
        <BottomNavigationAction
          label='Recents'
          icon={<ArrowCounterclockwise />}
          onClick={() => navigate('introducirDireccion')}
        />
        <BottomNavigationAction
          label='Personajes'
          icon={<StarHalf />}
          onClick={() => navigate('introducirDireccion')}
        />
        <BottomNavigationAction
          label='Ajustes'
          icon={<Gear />}
          onClick={() => navigate('/iniciar-sesion')}
        />
      </BottomNavigation>
    </Paper>
  )
}
