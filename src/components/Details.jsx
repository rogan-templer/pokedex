import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function Details (props) {
  
  const [info, setInfo] = useState([]);
  const { number, name } = useParams();
  
  useEffect(() => {
    
    loadData();
  }, [])
  
  
  const loadData = async () => {
    
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
    const data = await response.json();
    setInfo(data.types);
    console.log('data types', data.types);
    
  }

    return (
      <>
      <h1>{name}</h1>
      <p>Types: {
        info.map((data, index) => {
          
          
          return (
            <span key={index}>{data.type.name}, </span>
            
          )
        })
      }
      </p>
      </>
    )
  

}
export default Details;


