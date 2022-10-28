import './style.scss'
import netflixImage from "./../../assets/images/netflixImage.jpg"
export function QuartaAula(){
    return(
        <div className='quarta-aula'>
        <h1 className='main-title'>Olá, eu sou a QuartaAula</h1>
        <ul>
            <li>
                <img src={netflixImage}/>
                <h1>vÍDEO</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi facere sit voluptatem exercitationem quam vitae nisi fugiat quis, qui aperiam deserunt ratione fuga vero sequi, recusandae consectetur officia ullam facilis!</p>
                    
              
            </li>
        </ul>
    </div>
    )
}