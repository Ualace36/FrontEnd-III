import './style.scss'
const title = "Title Card 25"
const components = [{name:'component card', description: 'descrição do card', imagem:''} ]

export function TerceiraAula(){
    return(

        <div>
            <h1>Lista de components de um sistema</h1>
                <ul>
                    <li>
                        <img src=""/>
                        <h1>{components[0].name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo temporibus nam fugiat, odio commodi cumque sequi, illo ipsum consectetur unde delectus, minima eos ipsam ex repudiandae distinctio eveniet mollitia?</p>
                    </li>
                    
                </ul>
            
        </div>
    )
}