import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Homepage/Homepage.component';


const HatsPage =() =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
     <Route exact path='/' component ={HomePage}/>
     <Route extact path ='/hatsPage' component = {HatsPage}/>
    </div>
  );
}

export default App;
