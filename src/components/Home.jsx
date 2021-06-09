import React, { useState, useEffect } from 'react'

import { getPokemonList } from '../api'


function Home() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getPokemonList()
    .then(list => {
      setPokemonList(list)
      console.log('app pokemon', list);
      
    })
  }, [])
 
  return (
    <ul>
  {
      pokemonList.map((pokemon, index) => {
        return (
          <li key={index}>{pokemon.name}</li>  
          )
      })
    }
    </ul>
  
  )
}

export default Home;