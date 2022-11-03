import { useState } from "react"
import './style.scss'
export function SetimaAula(){
    const [contador, setContador] = useState(0)
    const [temaEscuro, setTemaEscuro] = useState(true)
   function somarNumero(numero){
    setContador( contador + numero)
   }

   function mudarTema(){
    setTemaEscuro(!temaEscuro)
   }

    return(
        <main className={`setima-aula-component ${temaEscuro ? 'dark-theme' : ''}`}>
            <h1>Contador</h1>
            <button onClick={() => mudarTema()}>Mudar tema</button>
            <button onClick={() =>somarNumero(2)}>Adicionando</button>
            <span>Numero Atual: {contador}</span>
        </main>
    )
}