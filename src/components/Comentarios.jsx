import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function Comentarios() {
  const { t } = useTranslation()

  return (
    <Container className='mt-4 mb-5'>
      <p>{t('comentarios')}</p>
      <List sx={{ width: '100%' }}>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            className='comentarista'
            primary='primer comentario'
            secondary='este es un ejemplo de un primer comentario'
          />
        </ListItem>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText
            className='comentarista'
            primary='segundo comentario'
            secondary='este es un ejemplo de un segundo comentario'
          />
        </ListItem>
      </List>
    </Container>
  )
}
