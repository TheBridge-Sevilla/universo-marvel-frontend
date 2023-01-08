import { NavLink } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import {GiTrophyCup} from 'react-icons/gi'
import {FaUserAstronaut} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useContextoUsuario } from '../../context/contextoUsuario'
function Navbar() {
    const { usuario } = useContextoUsuario()
    const { t } = useTranslation()
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'red' : 'white',
        }
    }
    return (
        <nav className='contenedor_navbar'>
            <NavLink style={navLinkStyles} to='/destacado'><GiTrophyCup/>{t('Ranking')}</NavLink>
            <NavLink style={navLinkStyles} to='/dashboard'><FaUserAstronaut/>{t('Personajes')}</NavLink>
            <NavLink style={navLinkStyles} to='/perfilUsuario'><FiSettings/><span>{t('Settings')}</span></NavLink>
        </nav>
    )
}

export default Navbar