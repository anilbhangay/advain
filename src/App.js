import React from 'react';
import './App.css';
import Login from './Components/Advocate-Register/Login';
import { BrowserRouter} from 'react-router-dom';


const App = () => {
  
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
    
  );
}

export default App;