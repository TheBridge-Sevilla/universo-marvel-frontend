import Textarea from '@mui/joy/Textarea'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Form, FormLabel } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function Comentar() {
  const { t } = useTranslation()
  const [comentario, setComentario] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    console.log('comentario publicado ' + comentario)
  }
  const handleChange = e => {
    setComentario(e.target.value)
  }

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
        style={{ width: 250 }}
      />
      <Button className='my-3' size='large' type='submit'>
        {t('publicar')}
      </Button>
    </Form>
  )
}