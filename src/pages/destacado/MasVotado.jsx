import { useTranslation } from 'react-i18next'
import { fetchDestacados } from '../../services/destacados/fetchDestacados'
import { Carrusel } from '../../services/destacados/Carrusel'


function MasVotado() {
  const { t } = useTranslation()
  const { json } = fetchDestacados('destacado', 'get', undefined)

  return (
    <>
      <p>{t('personaje-votado')}</p>
      <Carrusel  json={json} />
    </>
  )
}

export default MasVotado
