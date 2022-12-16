import React, {useEffect} from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RoofingIcon from '@mui/icons-material/Roofing'
import SettingsIcon from '@mui/icons-material/Settings'
//import Feed from '../pages/feed/Feed'
//import IniciarSesion from '../pages/login/IniciarSesion'
import Mapa from './Mapa'


/* 
let iconoPersonaje =  <img src='../../public/iron_man.png' width='25px' height='25px'></img>
let iconoPersonaje2 = <img src='../../public/hulk.png' width='25px' height='25px'></img> */
let iconoPersonaje3 =  <img src='../../public/personaje_icon.png' width='25px' height='25px'></img>

export default function NavBar() {
  const [value, setValue] = React.useState()

  function mapaPaginas(e, newValue){
    setValue(newValue)
  }

  useEffect(() => {
    mapaPaginas[value]
    console.log(mapaPaginas[0])
  }, [value])


  return (
    <div>
<Mapa value={value}/>
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          label='Home'
          icon={<RoofingIcon />}

        />
        <BottomNavigationAction
          label='Personaje'
          icon={iconoPersonaje3}
        />
        <BottomNavigationAction
          label='Setting'
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Box>
    </div>
  )
}
