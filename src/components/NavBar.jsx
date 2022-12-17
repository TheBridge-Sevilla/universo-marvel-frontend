import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RoofingIcon from '@mui/icons-material/Roofing'
import SettingsIcon from '@mui/icons-material/Settings'
import Mapa from './Mapa'
import { useContextoUsuario } from '../context/contextoUsuario'

let iconoPersonaje3 = <img src='../../public/personaje_icon.png' width='25px' height='25px'></img>


export default function NavBar() {

  const {pantalla, setPantalla} = useContextoUsuario()
  //const [value, setValue] = useState()
 

  const iconosNavegacion = () => (typeof(pantalla) == "number"? '' : 'none')

  if (!pantalla) {
    setTimeout(() => {
      setPantalla('inicio')
    }, '2000')
  }

  useEffect(() => {
    setPantalla(pantalla)

    console.log("pantalla",pantalla)
  }, [pantalla])

  return (
    <div>
      <Mapa/>
      <Box
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: iconosNavegacion }}
      >
        <BottomNavigation
          showLabels
          value={pantalla}
          onChange={(event, newValue) => {
            setPantalla(newValue)
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
