import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function ErrorPage() {
  const { t } = useTranslation()

  return (
    <Container className='ocupar-pantalla d-flex flex-column justify-content-center align-items-center mt-5'>
      <h1>{t('error-404')}</h1>
      <h4 className='mt-5'>{t('paginas-interesantes')}</h4>
      <Link to='/'>
        <p>{t('inicio')}</p>
      </Link>
      <Link to='/dashboard'>
        <p>{t('personajes')}</p>
      </Link>
    </Container>
  )
}

export default ErrorPage
