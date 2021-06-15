import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getPokemonList } from '../api'
import Profile from './Profile'



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
      <div className="col home">
        <img src="/images/Pokemon.png" alt="pokemon banner"/>
      </div>
      <div className="col home">
        <h1>Welcome to the Pokedex!</h1>
      </div>
          <ul className="col home">
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
    </div> 
  </>
  )
}

export default Home;

