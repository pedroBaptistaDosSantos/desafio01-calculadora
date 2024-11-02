import './style.css';
import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';

type PrivateProps = {
    label: string;
    onClick:MouseEventHandler;
}

export default function Button({label, onClick}: PrivateProps){
    return(
        <button className='ButtonContainer p-0' onClick={onClick}>
            {label}
        </button>
    )
}