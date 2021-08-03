import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header2 from './Components/Header2';
import './App.css';
import Home from './Components/Pages/Home';
import AboutSec from './Components/Pages/AboutPage';


function App() {

  return (
<BrowserRouter>
      <div className="App">
        <Header2 />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={AboutSec} />
      </div>
</BrowserRouter>

    
  );
}

export default App;
