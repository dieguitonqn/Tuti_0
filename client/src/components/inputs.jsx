import '../public/css/inputs.css'

export default function InputText(){
    return (
        <input className='input-text' type='text'></input>
    );
}

export function InputEmail(){
    return (
        <input 
            className='input-email'
            type="email"
            placeholder="Correo electrónico"
            // value={email}
            >
        </input>
    )
}