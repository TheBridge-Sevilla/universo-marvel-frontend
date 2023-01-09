import { NavLink } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import {GiTrophyCup} from 'react-icons/gi'
import {FaUserAstronaut} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

function Navbar() {
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
            <NavLink style={navLinkStyles} to='/destacado'><GiTrophyCup/>{t('ranking')}</NavLink>
            <NavLink style={navLinkStyles} to='/dashboard'><FaUserAstronaut/>{t('personajes')}</NavLink>
            <NavLink style={navLinkStyles} to='/perfil-usuario'><FiSettings/><span>{t('settings')}</span></NavLink>
        </nav>
    )
}
