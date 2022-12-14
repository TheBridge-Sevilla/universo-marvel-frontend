import { useState, useEffect } from 'react'
import './personajes.css'
import { Container, Image, Form } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import Spinner from 'react-bootstrap/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import Navbar from '../../components/navbar/Navbar'
import Volver from '../../components/Volver'
import BarraAvatar from '../../components/Avatar'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Carga from '../intro/Carga'
import { Link } from 'react-router-dom'
import { useContextoUsuario } from '../../context/contextoUsuario'
import Subir from '../../components/Subir'

function Personajes() {
  const [pagina, setPagina] = useState(1)
  const [filtro, setFiltro] = useState('')
  const {isIndice,setIsIndice,personajes,setPersonajes,valoraciones,setValoraciones} = useContextoUsuario()


  useEffect(()=>{
    if (window.localStorage.getItem("personajes")) {
      setPersonajes(JSON.parse(window.localStorage.getItem("personajes")))
      setValoraciones(JSON.parse(window.localStorage.getItem("valoraciones")))

    }
  },[])

  useEffect(() => {
    const url = `${import.meta.env.VITE_BASE_URL
      }/personajes?page=${pagina}&limit=${import.meta.env.VITE_PAGINATION_LIMIT
      }&filter=${filtro}`


      fetch(url)
      .then(data => data.json())
      .then(json => {
        setPersonajes(json.personajes)
        setValoraciones(json.valoraciones)
        window.localStorage.setItem("personajes", JSON.stringify(json.personajes))
        window.localStorage.setItem("valoraciones", JSON.stringify(json.valoraciones))
      })
    
    console.log(personajes)
    setPagina(1)
  }, [filtro])

  function siguientePaginaPersonajes() {
    console.log('nextentra')
    const url = `${import.meta.env.VITE_BASE_URL}/personajes?page=${pagina + 1
      }&limit=${import.meta.env.VITE_PAGINATION_LIMIT}&filter=${filtro}`
    setPagina(pagina + 1)
    fetch(url)
      .then(data => data.json())
      .then(json => {
        console.log(personajes)
        let nuevosPersonajes = json.personajes
        nuevosPersonajes.docs = personajes.docs.concat(json.personajes.docs)
        console.log(nuevosPersonajes)
        setPersonajes(nuevosPersonajes)
        setValoraciones(valoraciones.concat(json.valoraciones))
        window.localStorage.setItem("personajes", JSON.stringify(json.personajes))
        window.localStorage.setItem("valoraciones", JSON.stringify(json.valoraciones))
      })

    }
    function onFilter (e) {
      window.localStorage.removeItem("personajes")
      window.localStorage.removeItem("valoraciones")
      console.log("e",e.target.value)
      setFiltro(e.target.value)
    }

  if (!personajes) {
    //Componentizar?
    return (

      <Carga/>
    )
  } else {
    return (
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            delay: 1,
          }}
          transition={{ duration: 0.5 }}
        >
{/*           <Topbar/> */}
          <div className='mt-5 pt-1'>
          <div className='d-flex justify-content-between   m-4 fixed-top ' >
            <Volver />
            <BarraAvatar  />
          </div>{' '}
          <Container className='my-4  '>
            <Form.Control
              id='filtro'
              type='text'
              size='lg'
              placeholder='Filtro'
              onChange={(e) => {
                onFilter(e)
              }}
            />
          </Container>
          <InfiniteScroll
            className='contenedor_scroll d-flex flex-wrap mt-4'
            dataLength={personajes.docs.length}
            hasMore={pagina < personajes.totalPages}
            next={siguientePaginaPersonajes}
            loader={
              <span>
                <Spinner animation='border' />
                Cargando personajes
              </span>
            }
          >
            {personajes.docs.map((personaje, i) => (
              <Container
                id='contenedor_personajes'
                className='d-flex flex-column justify-content-center text-white'
                key={i}
                onClick={() => {
                  setIsIndice(i)
                  console.log(isIndice)
                }}
              >
                <Link to={`/personaje/${personaje.name.split(' ')[0].toLowerCase() }`} >
                <Image
                  className='imagen_personajes'
                  src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                  alt={`${personaje.name} imagen`}
                />
                <div>
                  <div className='contenedor_nombre'>
                    <p>{personaje.name}</p>
                  </div>
                  <div className='contenedor_valoracion'>
                    <p>
                      <span>
                        <AiFillStar />
                      </span>{' '}
                      {valoraciones[i] ? valoraciones[i] : 'Non rated'}
                    </p>
                  </div>
                </div>
                </Link>
              </Container>
            ))}
          </InfiniteScroll>
            <Subir/>
            </div>
          <Navbar />
        </m.div>
      </LazyMotion>
    )
  }
}
export default Personajes
