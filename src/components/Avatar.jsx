//import React, { useState, useRef, useEffect } from 'react'

import { useState } from 'react'
import Image from 'react-bootstrap/Image'
import { auth } from '../services/firebase/firebase'
import { useContextoUsuario } from '../context/contextoUsuario'

const AvatarUsuario = () => {
  console.log('useContextoUsuario', useContextoUsuario)
  console.log(auth, 'auth')
  //const [loading, setLoading] = useState(false)
  const [imagenPerfil, setImagenPerfil] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  )
  /*  const [usuario, setUsuario] = useState()
const currentUser = auth.currentUser; 

  async function upload(file, currentUser) {
  const fileRef = ref(storage, currentUser.uid + '.png')

  await uploadBytes(fileRef, file)
  const fotoURL = await getDownloadURL(fileRef)

  updateProfile(currentUser, { photoURL: fotoURL })
  setImagenPerfil(fotoURL)

  setMensaje(t('imagen-subida'))
  setTipo('success')
} 

useEffect(() => {
    if (currentUser && currentUser.photoURL) {
        setImagenPerfil(currentUser.photoURL)
    }
    setUsuario(currentUser.displayName)

}, [auth])

const handleChange = (e) => {
    if (e.target.files[0]) {
        setFoto(e.target.files[0])
        setLoading(true)
    }

}
const handleClick = () => {
    upload(foto, currentUser,)
    setLoading(false)

}

 return (

    <div>
         <input id="file-input" type="file" onChange={handleChange} hidden={true} />
         {loading ? <Button label={t("subir")} onClick={handleClick}></Button> : <></>}
    </div>
) */

  return (
    <div className='d-flex justify-content-end'>
      <Image roundedCircle='true' width='32' src={imagenPerfil}></Image>
    </div>
  )
}
export default AvatarUsuario
