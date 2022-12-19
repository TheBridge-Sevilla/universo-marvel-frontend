import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

export default function Volver() {
    const navigate = useNavigate();

    return (

        <Nav  >
            <ArrowCircleLeftIcon fontSize='large' onClick={() => navigate(-1)} />
        </Nav>


    )
}


