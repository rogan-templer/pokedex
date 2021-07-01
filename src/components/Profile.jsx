import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getProfile } from '../api';

function Profile () {
  
  const [profile, setProfile] = useState('');
  const { number } = useParams();

  useEffect(() => {
    getProfile(number).then((front_default) => {
      setProfile(front_default);
    })
  }, [number])
  
 
    return (
      <>
        <div className="col profile">
            <img src={profile} alt='pokemon profile'/>         
        </div>
      </>
    )
  

}
export default Profile;


