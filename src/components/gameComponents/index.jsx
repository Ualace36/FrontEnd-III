export function NewGamesComp (props){
    
    return (
        <li>
          <img src={props.item.picture} />
          <p>{props.item.plataforms}</p>
          <p>{props.item.categories}</p>
          <p>{props.item.price}</p>
          <p>{props.item.name}</p>
        </li>
      )
    }
    
