import { useTranslation } from 'react-i18next'
import { getDestacados } from '../../services/destacados/getDestacados'
import { Carrusel } from '../../services/destacados/Carrusel'

function MasVotado() {
  const { t } = useTranslation()
  const { json } = getDestacados('destacado', 'get', undefined)

  return (
    <>
      <p>{t('personaje-mas-votado')}</p>
      <Carrusel json={json} />
    </>
  )
}

export default MasVotado
