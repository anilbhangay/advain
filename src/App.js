import React from 'react';
import './App.css';
import Login from './Components/Advocate-Login/Login';
import  LoginOtp from './Components/Advocate-Login/LoginOtp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  
  return (
    <BrowserRouter>
     <Login />
     <Routes>
      <Route path='/LoginOtp' element={<LoginOtp />}/>
     </Routes>
     
   </BrowserRouter>
  );
}                                                        

export default App;