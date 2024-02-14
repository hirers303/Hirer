import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Customer from './components/Customer';
import Footer from './components/Footer';
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Customer/>}/>  
    <Route path='/' element={<Footer/>}/>  
    </Routes>
    </BrowserRouter>
  
  );
}


export default App;
