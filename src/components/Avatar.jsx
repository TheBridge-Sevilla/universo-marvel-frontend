import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Avatar from '@mui/material/Avatar'
import { auth } from "../services/firebase/firebase";

export default function BarraAvatar() {

    const currentUser = auth.currentUser;
    const [avatar, setAvatar] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
    useEffect(() => {
        if (currentUser && currentUser.photoURL) {
            setAvatar(currentUser.photoURL)
        }
    }, [auth])
    return (
        <Nav  >

            <Avatar
                color='action'
                alt='Google Photo/Initial'
                src={avatar}
                referrerPolicy="no-referrer"
            />
        </Nav>
    )
}