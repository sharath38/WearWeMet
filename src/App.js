import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Homepage/Homepage.component';
import  ShopPage from './pages/shop/Shop-page';


// const HatsPage =() =>(
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

function App() {
  return (
    <div className="App">
     <Route exact path='/' component ={HomePage}/>
     <Route extact path ='/shop' component = {ShopPage}/>
    </div>
  );
}

export default App;
