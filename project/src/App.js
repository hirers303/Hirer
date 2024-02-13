import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Customer from './components/Customer';
import Footer from './components/Footer';
 import Page3 from './components/Page3';
 import page2 from './components/page2';
 import page21 from '.'
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<page2/>}/>  
    
    </Routes>
    </BrowserRouter>
  
  );
}


export default App;
