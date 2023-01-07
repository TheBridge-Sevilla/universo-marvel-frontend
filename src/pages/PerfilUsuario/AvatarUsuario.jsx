import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, TextField } from '@mui/material'
import { auth, storage } from '../../services/firebase/firebase'
import { updateProfile } from 'firebase/auth'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import TopBar from '../../components/TopBar'
import Stack from '@mui/material/Stack'
import { useContextoUsuario } from '../../context/contextoUsuario'

export default function AvatarUsuario() {
  const { t } = useTranslation()
  const { imagenPerfil , setImagenPerfil } = useContextoUsuario()
  const avatarSinImagen =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
 
  const currentUser = auth.currentUser

  const [loading, setLoading] = useState(false)
  const [foto, setFoto] = useState()
  //actualizar foto de perfil

  async function upload(file, currentUser) {
    const fileRef = ref(storage, currentUser.uid + '.png')

    await uploadBytes(fileRef, file)
    const fotoURL = await getDownloadURL(fileRef)

    updateProfile(currentUser, { photoURL: fotoURL })
    setImagenPerfil(fotoURL)
  }


  const handleChange = e => {
    setFoto(e.target.files[0])
    setLoading(true)
  }
  const subirFoto = () => {
    upload(foto, currentUser)
    setLoading(false)
  }
  const borrarFoto = () => {
    upload(avatarSinImagen, currentUser)
    setLoading(false)
  }

  return (
    <Stack
      direction='row'
      spacing={2}
      justifyContent='space-around'
      alignItems='center'
    >
      <TopBar sizes={139} imagenPerfil={imagenPerfil} />
      <Stack spacing={2}>
        <Button component='label'>
          {t('cambiar-imagen')}
          <TextField
            hidden
            id='imagenAvatar'
            type='file'
            label={t('subir')}
            onChange={handleChange}
          ></TextField>
        </Button>
        {loading ? (
          <Button label={t('subir')} onClick={subirFoto}>
            Actualizar
          </Button>
        ) : (
          <></>
        )}
        <Button label={t('borrar')} onClick={borrarFoto}>
        {t('borrar')}
        </Button>
      </Stack>
    </Stack>
  )
}
