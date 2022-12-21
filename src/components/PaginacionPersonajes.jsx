import Pagination from 'react-bootstrap/Pagination'

function PaginacionPersonajes(props) {
  //Funciones de navegar por las paginas
  const paginaInicio = () => props.setPagina(1)

  const paginaAnterior = () => {
    if (props.pagina > 1) {
      props.setPagina(props.pagina - 1)
    }
  }
  const paginaNumerada = e => {
    props.setPagina(parseInt(e.target.textContent))
  }
  const paginaSiguiente = () => {
    if (props.pagina < props.personajes.totalPages) {
      props.setPagina(props.pagina + 1)
    }
  }
  const ultimaPagina = () => props.setPagina(props.personajes.totalPages)

  //Creacion de etiquetas y condiciones para que sean visibles
  const etiquetaInicio =
    props.pagina > 2 ? <Pagination.First onClick={paginaInicio} /> : ''
  const etiquetaPrevia =
    props.pagina > 2 ? <Pagination.Prev onClick={paginaAnterior} /> : ''

  const etiquetaPuntosInicio = props.pagina > 4 ? <Pagination.Ellipsis /> : ''

  const etiquetaNumAnteriores =
    props.pagina > 3 ? (
      <Pagination.Item onClick={paginaNumerada}>
        {props.pagina - 2}
      </Pagination.Item>
    ) : (
      ''
    )
  const etiquetaNumPrevio =
    props.pagina >= 2 ? (
      <Pagination.Item onClick={paginaNumerada}>
        {' '}
        {props.pagina - 1}{' '}
      </Pagination.Item>
    ) : (
      ''
    )

  const etiquetaPagina = (
    <Pagination.Item active>{props.pagina}</Pagination.Item>
  )
  const etiquetaNumSiguiente =
    props.pagina <= props.personajes.totalPages - 1 ? (
      <Pagination.Item onClick={paginaNumerada}>
        {' '}
        {props.pagina + 1}{' '}
      </Pagination.Item>
    ) : (
      ''
    )
  const etiquetaNumPosteriores =
    props.pagina < props.personajes.totalPages - 2 ? (
      <Pagination.Item onClick={paginaNumerada}>
        {' '}
        {props.pagina + 2}{' '}
      </Pagination.Item>
    ) : (
      ''
    )

  props.pagina != props.personajes.totalPages - 2 ? (
    <Pagination.Next onClick={paginaSiguiente} />
  ) : (
    ''
  )
  const etiquetaPuntosFin =
    props.pagina < props.personajes.totalPages - 3 ? (
      <Pagination.Ellipsis />
    ) : (
      ''
    )
  const etiquetaSiguiente =
    props.pagina < props.personajes.totalPages - 2 ? (
      <Pagination.Next onClick={paginaSiguiente} />
    ) : (
      ''
    )
  const etiquetaFinal =
    props.pagina != props.personajes.totalPages ? (
      <Pagination.Last onClick={ultimaPagina} />
    ) : (
      ''
    )

  return (
    <Pagination>
      {etiquetaInicio}
      {etiquetaPrevia}
      {etiquetaPuntosInicio}
      {etiquetaNumAnteriores}
      {etiquetaNumPrevio}
      {etiquetaPagina}
      {etiquetaNumSiguiente}
      {etiquetaNumPosteriores}
      {etiquetaPuntosFin}
      {etiquetaSiguiente}
      {etiquetaFinal}
    </Pagination>
  )
}

export default PaginacionPersonajes
