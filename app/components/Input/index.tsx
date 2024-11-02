import './style.css';

type PrivateProps = {
    value: string ;
}


export default function Input({value}: PrivateProps){
    return(
        <div className='input'>
            <input disabled type="text" value={value} />
        </div>
    )
}