import { useState, useEffect } from 'react'
import './personaje.css'
import { Image } from 'react-bootstrap'
import { Rating, Box, Typography } from '@mui/material'
import { auth } from '../../services/firebase/firebase'
import BarraAvatar from '../Avatar'
import { useContextoUsuario } from '../../context/contextoUsuario'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MD5 } from 'crypto-js';

function Personaje() {
  const { personajes, valoraciones, isIndice, setIsIndice } = useContextoUsuario()
  const personaje = personajes.docs[isIndice]
  const valoracion = valoraciones[isIndice]
  const [valoracionPersonal, setValoracionPersonal] = useState(0)
  const indiceAnterior = isIndice - 1;
  const indiceSiguiente = isIndice + 1;
  const personajeAnterior = personajes.docs[indiceAnterior]
  const personajeSiguiente = personajes.docs[indiceSiguiente]
  const apikey = import.meta.env.VITE_MARVEL_KEY
  const timestamp = Date.now();
  const privateKey = import.meta.env.VITE_PRIVATE_KEY
  const publicKey = import.meta.env.VITE_PUBLIC_KEY
  const hash = MD5(`${timestamp}${privateKey}${publicKey}`);
  const personajeID = personaje.Id
  const navigate = useNavigate();

  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(personaje.Id)
    const url = `${import.meta.env.VITE_BASE_URL}/valoraciones?idPersonaje=${personaje._id
      }&idUsuario=${auth.currentUser.uid}`
    fetch(url, { cache: "no-store" })
      .then(data => data.json())
      .then(json => { setValoracionPersonal(json) })
  }, [])

  function emitirValoracion(valoracion) {
    const url = `${import.meta.env.VITE_BASE_URL}/valoraciones?personaje=${personaje.name
      }`

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idUsuario: auth.currentUser != null ? auth.currentUser.uid : undefined,
        valoracion: valoracion, //id del usuario Firebase
        idPersonaje: personaje._id,
      }),
    })
      .then(res => res.json())
      .then(json => {
        setValoracionPersonal(valoracion)
      })
  }



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters/${personajeID}/comics?apikey=${apikey}&ts=${timestamp}&hash=${hash}`
        );
        const data = await response.json();
        setComics(data.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);




  const siguientePersonaje = () => {
    setIsIndice(isIndice + 1)
  }

  const anteriorPersonaje = () => {
    setIsIndice(isIndice - 1);

  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  }
  return (
    <>
      <div className='d-flex flex-row justify-content-between m-4'>
        <Nav  >
          <ArrowBackIcon className='flecha-volver' fontSize='large' onClick={() => navigate("/dashboard")} />
        </Nav>
        <BarraAvatar />
      </div>
      <div className='d-flex flex-row align-items-center justify-content-between '>

        {isIndice > 0 ?
          <Link to={`/personaje/${personajeAnterior.name.split(' ')[0].toLowerCase()}`}><ArrowBackIosNewIcon className='flecha' onClick={() => anteriorPersonaje()} ontSize='large' /></Link>
          : <ArrowBackIosNewIcon className='flecha' fontSize='large' />}
        <Image
          className='imagen_personaje'
          src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
          alt={`${personaje.name} imagen`}
        />
        <Link to={`/personaje/${personajeSiguiente.name.split(' ')[0].toLowerCase()}`}><ArrowForwardIosIcon className='flecha' onClick={() => siguientePersonaje()} ontSize='large' /></Link>
      </div>
      <div className="contenedor_nombre_personaje">
        <h5>{personaje.name}</h5>
      </div>

      <div>
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Typography component='legend'>Tu valoración</Typography>
          <Rating
            name='simple-controlled'
            value={valoracionPersonal}
            onChange={(event, newValue) => {
              emitirValoracion(newValue)
            }}
          />
        </Box>
      </div>
      <br />
      Valoracion global :
      {valoracion ? (
        <Rating
          name='half-rating-read'
          defaultValue={valoracion}
          precision={0.5}
          readOnly
        />
      ) : (
        ' por valorar'
      )}

      <button type="button" className="boton_personaje"
        onClick={(e) => {
          e.preventDefault();
          window.open(`${personaje.urls[0].url}`);
        }}
      > DESCÚBRELO</button>
      <h2 className='m-3'>Comics:</h2>
      <Carousel responsive={responsive} showDots={false} swipeable={true} className="m-2">
        {comics.map((comic) => (
          <a
            key={comic.id}
            href={comic.urls[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="imagen-comic"
            />
            <p>{comic.title}</p>
          </a>
        ))}
      </Carousel>

    </>
  )
}

export default Personaje
