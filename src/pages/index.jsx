import { NewGamesComp } from "../components/gameComponents"
export function Dhgames(){

    const newGames = [
        {   
            id: 1,
            name: 'Hollow Knight',
            plataforms: ['🌊'],
            categories: ['Metroidvania', 'Souls-like', 'Platformer2D'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg'
        },
        {   
            id: 2,
            name: "Don't Starve",
            plataforms: ['windows'],
            categories: ['SurvivalOpen', 'World Survival', 'CraftCrafting'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg'
        },
        {   
            id:3,
            name: 'Cult of the Lamb',
            plataforms: ['windows'],
            categories: ['Horror', 'Cute', 'Roguelike'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg'
        }
    ]

    return(
       <div>

        
           {
            newGames.map(
                component => {
                  return (
                    <NewGamesComp
                      key={component.id}
                      item={component}
                    />
                  )
                }
              )
           }
        
          
       </div>
    )
}