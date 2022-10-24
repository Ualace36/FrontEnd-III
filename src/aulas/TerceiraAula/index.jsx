import './style.scss'
const title = "Title Card 25"
const components = [{name:'component card', description: 'descrição do card', imagem:'https://media.tenor.com/xaJrTrfiRcEAAAAM/happy-panda-bamboo.gif'},
{name:'component card2', description: 'descrição do card2', imagem:'https://media.tenor.com/pF3s48bhdIsAAAAM/marin-kitagawa-anime-shy.gif'},
{name:'component card3', description: 'descrição do card3', imagem:'https://i.pinimg.com/originals/de/67/22/de67224d07c99e9357d6bc4f17465761.gif'} ]

export function TerceiraAula(){
    return(

        <div>
            <h1>Lista de components de um sistema</h1>
                <ul>
                {
                     components.map(component => (
                        <li>

                        <img src={component.imagem}/>
                        <h1>{component.name}</h1>
                        <p>{component.description}</p>
                    </li>
                    
                     ))       
                        }
                </ul>
            
        </div>
    )
}