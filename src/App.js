import React from 'react';
import './App.css';
import Login from './Components/Advocate-Login/Login';
import LoginOtp from './Components/Advocate-Login/LoginOtp';
import Newpassword from './Components/Advocate-Login/Newpassword';
import Setpassword from './Components/Advocate-Login/Setpassword';
import Successpassword from './Components/Advocate-Login/Successpassword';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  
  return (
    <BrowserRouter>
     <Login />
     <Routes>
      <Route path='/LoginOtp' element={<LoginOtp />}/>
      <Route path='/Newpassword' element={<Newpassword />}/>
      <Route path='/Setpassword' element={<Setpassword />}/>
      <Route path='/Successpassword' element={<Successpassword />} />
     </Routes>
   </BrowserRouter>
  );
}                                                        

export default App;