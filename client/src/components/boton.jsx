import '../public/css/botones.css'

export default function BotonGradiente({text}){
    return (
        <button className='boton_gradiente'>{text}</button>
    )
}

export function  BotonResaltado({text,tipo}){
    return (
        <button type={tipo} className='boton_resaltado'>{text}</button>
    )
}

export function  BotonRedondo({text,tipo}){
    return (
        <button type={tipo}className='boton_redondo'>{text}</button>
    )
}