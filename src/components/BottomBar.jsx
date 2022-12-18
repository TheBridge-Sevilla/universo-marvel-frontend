import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { useState } from 'react'
import { ArrowCounterclockwise, Gear, StarHalf } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

export default function BottomBar() {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()

  return (
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
  )
}
