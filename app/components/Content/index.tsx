import './style.css';
import { PropsWithChildren } from 'react';
export default function Content({ children }: PropsWithChildren){
    return(
        <div className='content' >
            {children}
        </div>
    )
}