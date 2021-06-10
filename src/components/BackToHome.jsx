import React from 'react'
import { Link } from 'react-router-dom'

function BackToHome () {
  return (
    <>
      <div className="col">
        <Link to='/'><button>Return to Homepage</button></Link>
      </div>
    </>
  )
}

export default BackToHome