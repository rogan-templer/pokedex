import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Details from './components/Details'


function App() {
 return (
   <>
   <div className="container">
      <Route exact path='/' component={Home} />
      <Route path='/Details/:name/:number' component={Details} />
   </div>
   </>
 )
}

export default App;
