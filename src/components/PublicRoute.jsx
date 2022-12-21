import React from 'react'
import { Navigate } from "react-router-dom";
import { useContextoUsuario } from '../context/contextoUsuario';

export default function PublicRoute({ children }) {
    const { usuario } = useContextoUsuario()

    if (usuario) {

        return <Navigate to="/dashboard" replace />;
    }

    return children;
};