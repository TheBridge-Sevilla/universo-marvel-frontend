import { useState } from 'react'
import { Button, Snackbar } from '@mui/material'

export default function Notificacion() {
  const [open, setOpen] = useState(false)
  const mensaje = 'hola'
  const handleClick = e => {
    e.preventDefault()
    setOpen(true)
  }

  return (
    <div>
      <Button onClick={handleClick}> Clickeame esta </Button>
      <Snackbar open={open} autoHideDuration={3000} message={mensaje} />
    </div>
  )
}
