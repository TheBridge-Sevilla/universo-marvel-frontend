import Textarea from '@mui/joy/Textarea'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { auth } from '../../services/firebase/firebase'
import { useContextoAlert } from '../../context/contextoAlert'
import { postComentario } from '../../services/personaje/postComentario'

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

  return (
    <Form
      onSubmit={onSubmit}
      className='d-flex flex-column justify-content-center mt-4'
    >
      <Textarea
        label='Outlined'
        placeholder={t('escribir-comentario')}
        variant='outlined'
        onChange={handleChange}
        className='comentar-area align-self-center'
        style={{ width: 320 }}
        minRows={3}
      />
      <Button className='boton-comentar my-4 mx-4 align-self-end' type='submit'>
        {t('publicar')}
      </Button>
    </Form>
  )
}
