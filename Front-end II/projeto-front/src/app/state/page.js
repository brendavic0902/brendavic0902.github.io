'use client'
import {useState} from "react"

export default function State() {
    const [msg, setMsg] = useState('');
    const [mostarDiv, setMostrarDiv] = useState(true)
    //const alterarMsg = () => {
        //msg='Bom dia'
        //console.log(msg)
    

    const manipularInput = (evento) => {
        console.log(evento.targeto.value);
    }

    return (
        <div>
            <p>Sua mensagem: {msg}</p>
            <input type="text" onChange={manipularInput} />

            <button onClick={()=>SetmostarDiv(!MostrarDiv)}>{MostrarDiv? 'Esconder': 'Mostar'}Clique</button>
        {true && (
            <div>
                <p>paragrafo dinamico!</p>
            </div>
            ) 
        }       
    </div> 
    
    )
}