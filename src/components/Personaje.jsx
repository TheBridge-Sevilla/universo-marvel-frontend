import { React, useEffect, useState } from 'react'
import { useApi } from '../hooks/useApi'

export default function Personaje() {
    const { loading, api } = useApi('personajes')
    const personajesArray = api
    console.log(loading, personajesArray)
    return (
        <div>personaje</div>
    )
}