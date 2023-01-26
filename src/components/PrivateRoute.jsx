import { Navigate } from "react-router-dom";
import { useContextoUsuario } from '../context/contextoUsuario';

export default function PrivateRoute({ children }) {
    const { usuario } = useContextoUsuario()

    if (!usuario) {

        return <Navigate to="/" replace />;
    }

    return children;
};