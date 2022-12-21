import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, FormGroup, TextField } from '@mui/material' //Link?
import { Form } from 'react-bootstrap'
import { RegistrarUsuario } from '../../services/firebase/registrarUsuario'
import { auth, storage } from '../../services/firebase/firebase'
import { updateProfile } from 'firebase/auth'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import BarraAvatar from '../../components/Avatar'
import './PerfilUsuario.css'
import Navbar from '../../components/navbar/Navbar'

export default function PerfilUsuario() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [contraseña, setContraseña] = useState('')
  const { onSubmit } = RegistrarUsuario(email, contraseña)

  const currentUser = 'prueba'
  const avatarSinImagen =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  const [imagenPerfil, setImagenPerfil] = useState(avatarSinImagen)

  // console.log(emailUsuario, 'auth')
  const [loading, setLoading] = useState(false)
  const [foto, setFoto] = useState()
  //actualizar foto de perfil

  async function upload(file, currentUser) {
    const fileRef = ref(storage, currentUser.uid + '.png')

    await uploadBytes(fileRef, file)
    const fotoURL = await getDownloadURL(fileRef)

    updateProfile(currentUser, { photoURL: fotoURL })
    setImagenPerfil(fotoURL)

    /*     setMensaje(t("imagen-subida"))
    setTipo("success") */
  }
  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      setImagenPerfil(currentUser.photoURL)
    }
  }, [auth])

  const handleChange = e => {
    if (e.target.files[0]) {
      setFoto(e.target.files[0])
      setLoading(true)
    }
  }
  const subirFoto = () => {
    upload(foto, currentUser)
    setLoading(false)
  }
  const borrarFoto = () => {
    setFoto(avatarSinImagen)
    setLoading(false)
  }

  return (
    <div className='h-mv d-flex flex-column justify-content-center mx-4'>
      <h6 className='my-5'>{t('Perfil')}</h6>
      <div className='h-mv d-flex flex-row justify-content-center mx-4'>
        <BarraAvatar sizes={139} imagenPerfil={imagenPerfil} />{' '}
        <div className='h-mv d-flex flex-column justify-content-center mx-4'>
          <TextField
            id='imagenAvatar'
            type='file'
            label={t('subir')}
            onClick={handleChange}
          ></TextField>

          <Button label={t('subir')} onClick={subirFoto}>
            Cambiar avatar
          </Button>

          <Button label={t('borrar')} onClick={borrarFoto}>
            Borrar
          </Button>
        </div>
      </div>
      <Form
        className='ocupar-pantalla d-flex flex-column justify-content-center'
        onSubmit={onSubmit}
      >
        <FormGroup className='d-flex flex-column justify-content-center mx-4'>
          <TextField
            disabled
            name='nombre'
            label={t('usuario')}
            /*             defaultValue={usuario} */
            type='text'
            className='my-3'
          />
          <TextField
            /* disabled */
            name='email'
            label={t('email')}
            type='email'
            /*         defaultValue={emailUsuario} */
            className='my-3'
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <TextField
            disabled
            name='contraseña'
            label={t('contraseña')}
            type='password'
            className='my-3'
            placeholder=''
            onChange={e => {
              setContraseña(e.target.value)
            }}
          />
        </FormGroup>
        <Navbar />
      </Form>
    </div>
  )
}
