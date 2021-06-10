import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import BackToHome from './BackToHome';

function Details () {
  
  const [info, setInfo] = useState([]);
  const { number, name } = useParams();
  
  useEffect(() => {
    
    loadData();
  }, [])
  
  
  const loadData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
    const data = await response.json();
    setInfo(data.types);  
  }

    return (
      <>
      <div className="grid">
        <h1 className="col">{name}</h1>
      <p className="col">Types: {
        info.map((data, index) => {
          return (
            <span key={index}>{data.type.name}, </span>
            
          )
        })
      }
      </p>
      <hr className="col"/>
        <BackToHome />
      </div>
      </>
    )
  

}
export default Details;


