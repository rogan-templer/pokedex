import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Details from './components/Details'


function App() {
 return (
   <>
   <Route exact path='/' component={Home} />
   <Route path='/Details' component={Details} />
   </>
 )
}

export default App;
