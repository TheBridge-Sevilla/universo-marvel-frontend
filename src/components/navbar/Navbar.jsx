import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserAstronaut} from 'react-icons/fa'


function Navbar() {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'red' : 'white',
        }
    }
    return (
        <nav className='contenedor_navbar'>
            <NavLink style={navLinkStyles} to='faltaPorRellenar'><AiOutlineHome/>Inicio</NavLink>
            <NavLink style={navLinkStyles} to='/dashboard'><FaUserAstronaut/>Personajes</NavLink>
            <NavLink style={navLinkStyles} to='/registro'><FiSettings/><span>Settings</span></NavLink>
        </nav>
    )
}

export default Navbar