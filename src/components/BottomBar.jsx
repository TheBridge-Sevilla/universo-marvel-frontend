import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { useState } from 'react'
import { ArrowCounterclockwise, Gear, StarHalf } from 'react-bootstrap-icons'
import { Link as RouterLink } from 'react-router-dom'

export default function BottomBar() {
  const [value, setValue] = useState(0)
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={event => {
        setValue(event.value)
      }}
    >
      <BottomNavigationAction
        LinkComponent={RouterLink}
        to='/registro'
        label='Recents'
        icon={<ArrowCounterclockwise />}
      />
      <BottomNavigationAction
        LinkComponent={RouterLink}
        to='/dashboard'
        label='Personajes'
        icon={<StarHalf />}
      />
      <BottomNavigationAction label='Ajustes' icon={<Gear />} />
    </BottomNavigation>
  )
}
