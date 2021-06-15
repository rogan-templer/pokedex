import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function Profile () {
  
  const [profile, setProfile] = useState('');
  const { number } = useParams();

  useEffect(() => {
    
    loadProfile();
  }, [])
  
  const loadProfile = async () => {
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon-form/${number}/`);
    const pokemon = await response.json();
    setProfile(pokemon.sprites.front_default)
    // console.log('sprite data', pokemon.sprites.front_default);
    
  }

 

    return (
      <>
        <div className="col profile">
            <img src={profile} alt='pokemon profile'/>         
        </div>
      </>
    )
  

}
export default Profile;


