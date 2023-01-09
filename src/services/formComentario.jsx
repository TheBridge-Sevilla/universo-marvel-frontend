import Textarea from '@mui/joy/Textarea'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Form, FormLabel } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { auth } from '../services/firebase/firebase'
import { useContextoAlert } from './../context/contextoAlert'
import { postComentario } from './../services/comentarios/postComentario'

export default function Comentar(props) {
  const { t } = useTranslation()
  const [comentario, setComentario] = useState('')
  const personaje = props.personaje
  const { notificacion } = useContextoAlert()

  const onSubmit = e => {
    e.preventDefault()
    if (auth.currentUser.displayName === null) {
      notificacion(`${t('solo-usuarios-registrados')}`, 'error')
    }
    if (auth.currentUser.displayName != null && comentario === '') {
      notificacion(`${t('escribir-comentario')}`, 'error')
    } else {
      postComentario(comentario, personaje)
      notificacion('comentario exitoso', 'success')
    }
  }

  const handleChange = e => {
    setComentario(e.target.value)
  }

  console.log(personaje)
  return (
    <Form
      onSubmit={onSubmit}
      className='d-flex flex-column justify-content-center align-items-center'
    >
      <FormLabel>{t('comentar')}</FormLabel>
      <Textarea
        label='Outlined'
        placeholder={t('escribir-comentario')}
        variant='outlined'
        onChange={handleChange}
        style={{ width: 300 }}
      />
      <Button className='my-3' size='large' type='submit'>
        {t('publicar')}
      </Button>
    </Form>
  )
}
