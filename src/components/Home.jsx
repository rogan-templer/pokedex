import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getPokemonList } from '../api'

function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList()
    .then(list => {
      setPokemonList(list)      
    })
  }, [])
 
  return (
    <ul>
  {
      pokemonList.map((pokemon, index) => {
        const name = pokemon.name;
        return (
          <li key={index}>
            <Link 
              to={{
                pathname: `/Details/${name}/${index + 1}/`
              }}
            >
              {name}
            </Link>
          </li>  
        )
      })
    }
    </ul>
  
  )
}

export default Home;

