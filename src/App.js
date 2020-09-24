import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import './App.css'

function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Router path="/" />
     </Switch>
   </Router>
  )
}

export default App;
