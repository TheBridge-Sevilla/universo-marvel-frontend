import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RoofingIcon from '@mui/icons-material/Roofing'
import SettingsIcon from '@mui/icons-material/Settings'
import Mapa from './Mapa'

let iconoPersonaje3 = <img src='../../public/personaje_icon.png' width='25px' height='25px'></img>

export default function NavBar() {
  const [value, setValue] = React.useState()

  const iconosNavegacion = () => (value? '' : 'none')

  if (!value) {
    setTimeout(() => {
      setValue(1)
    }, '2000')
  }

  useEffect(() => {
    setValue(value)
  }, [value])

  return (
    <div>
      <Mapa value={value} />
      <Box
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: iconosNavegacion }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction label='Loading' icon={<RoofingIcon />} sx={{ display: 'none' }}/>
          <BottomNavigationAction label='Home' icon={<RoofingIcon />} />
          <BottomNavigationAction label='Personaje' icon={iconoPersonaje3} />
          <BottomNavigationAction label='Setting' icon={<SettingsIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  )
}
