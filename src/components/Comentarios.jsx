import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Comentar from '../services/formComentario'
import TopBar from './TopBar'

export default function Comentarios(props) {
  const { t } = useTranslation()
  const personaje = props.personaje

  
  return (
    <Container className='comentarios h-100'>
      <Container className='mb-4'>
        <TopBar personaje={personaje} />
      </Container>
      <h4 className='d-flex align-self-start'>{t('comentarios')}</h4>
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
      <Comentar personaje={personaje} />
    </Container>
  )
}
