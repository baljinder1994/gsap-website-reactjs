import React from 'react'
import Home from './Home'
import About from './About'
import Acv from './Acv'
import Projects from './Projects'
import Test from './Test'
import Extra from './Extra'
import Navbar from './Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Acv/>
      <Projects/>
      <Test/>
      <Extra/>
    </div>
  )
}

export default App
