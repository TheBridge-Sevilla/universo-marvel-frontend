import React, {useState,useEffect} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Subir() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
        {showButton ? <ArrowUpwardIcon className='flecha-subir show' fontSize='large' onClick={handleClick}></ArrowUpwardIcon> : <></>}
        </>
    );
}
