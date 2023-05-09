import { useState } from 'react';

function App() {

  const [pokemons, setPokemons] = useState([])
  
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      setPokemons(jsonResponse.results);
    }).catch((err)=>{
      console.log(err);
    });
  }
  
  return (
    <div>
      <button onClick={fetchPokemons}>Fetch Pokemons</button>
      {
        pokemons.map((monster, idx) => {
          return (
            <ul>
              <li key={idx}>{monster.name}</li>
            </ul>
          )
        })
      }
    </div>
  )
}

export default App;
