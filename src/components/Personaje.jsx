import { useState, useEffect } from 'react'
import { Button, Container, Image } from 'react-bootstrap'

export default function Personaje() {
   const [entidad, setEntidad] = useState('personajes')
   const [pagina, setPagina] = useState(1)
   const [limite, setLimite] = useState(10)
/*    const url = `${import.meta.env.VITE_BACKEND_URL}/${entidad}?page=${pagina}&limit=${limite}` */
const url = `${import.meta.env.VITE_BASE_URL}/${entidad}`
   const [personajes, setPersonajes] = useState([])

   async function fetchApi() {
      const data = await fetch(url)
      const json = await data.json()
      setPersonajes(json.docs)
   }

   useEffect(() => {
      fetchApi().catch((error) => console.log(error))
   }, [pagina])

   return (
      <>
         {personajes.map((personaje) => (
            <Container
               key={personaje.Id}
               className="d-flex flex-column justify-content-center align-items-center"
               fluid
            >
               <Image
                  className="vw-100"
                  src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                  alt={`${personaje.name} imagen`}
               />
               <h1>{personaje.name}</h1>
               <Button
                  onClick={() =>
                     window.open(
                        personaje.urls.filter((obj) => obj.type === 'detail')[0]
                           .url,
                        '_blank'
                     )
                  }
               >
                  Ver personaje en Marvel
               </Button>
            </Container>
         ))}
      </>
   )
}