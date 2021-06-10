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
    <>
    <div className="grid">
      <div className="col">
        <h1>Pokedex</h1>
      </div>
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
                    className="col m-6">
                    {name}
                  </Link>
                </li>  
              )
            })
          }
          </ul>
    </div> 
  </>
  )
}

export default Home;

