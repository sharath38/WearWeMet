import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Homepage/Homepage.component';
import  ShopPage from './pages/shop/Shop-page';
import Header from './header/Header'


// const HatsPage =() =>(
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

function App() {
  return (
    <div className="App">
    <Header/>
    <switch>
       <Route exact path='/' component ={HomePage}/>
       <Route extact path ='/shop' component = {ShopPage}/>
     </switch>
    </div>
  );
}

export default App;
