import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'



import Menu from '../components/menu/menu'

export default  props =>
  <Router>
    
    <Menu/>
    <Routes/>

  </Router>