import { useState, useEffect } from 'react'
import { Button, Container, Image, Pagination } from 'react-bootstrap'

export default function Personaje() {
  const [entidad, setEntidad] = useState('personajes')
  const [pagina, setPagina] = useState(1)
  const [limite, setLimite] = useState(1)
  /*    const url = `${import.meta.env.VITE_BACKEND_URL}/${entidad}?page=${pagina}&limit=${limite}` */
  let url = `${
    import.meta.env.VITE_BASE_URL
  }/${entidad}?page=${pagina}&limit=${limite}`
  const [personajes, setPersonajes] = useState([])

  async function fetchApi() {
    const data = await fetch(url)
    const json = await data.json()
    setPersonajes(json.docs)
  }

  useEffect(() => {
    fetchApi().catch((error) => console.log(error))
  }, [pagina])

  const pasarPagina = (e) => {
    e.preventDefault()
    setPagina(pagina+1)
  }

  console.log(pagina)
  return (
    <>
      {personajes.map((personaje) => (
        <Container
          key={personaje.Id}
          className="d-flex flex-column justify-content-center align-items-center"
          fluid
        >
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            {/*             <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
             */}
            <Pagination.Next onClick={pasarPagina} />
            <Pagination.Last />
          </Pagination>
          <Image
            className="vw-100"
            src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
            alt={`${personaje.name} imagen`}
          />
          <h1>{personaje.name}</h1>
          <Button
            onClick={() =>
              window.open(
                personaje.urls.filter((obj) => obj.type === 'detail')[0].url,
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
